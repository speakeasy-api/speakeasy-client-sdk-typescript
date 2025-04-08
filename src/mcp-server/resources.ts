/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  McpServer,
  ResourceMetadata,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { Variables } from "@modelcontextprotocol/sdk/shared/uriTemplate.js";
import { ReadResourceResult } from "@modelcontextprotocol/sdk/types.js";
import { SpeakeasyCore } from "../core.js";
import { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";
import { isAsyncIterable, isBinaryData, valueToBase64 } from "./shared.js";

export type ReadResourceCallback = (
  client: SpeakeasyCore,
  uri: URL,
  extra: RequestHandlerExtra,
) => ReadResourceResult | Promise<ReadResourceResult>;

export type ResourceDefinition = {
  name: string;
  description?: string;
  metadata?: ResourceMetadata;
  scopes?: MCPScope[];
  resource: string;
  read: ReadResourceCallback;
};

export type ReadResourceTemplateCallback = (
  client: SpeakeasyCore,
  uri: URL,
  vars: Variables,
  extra: RequestHandlerExtra,
) => ReadResourceResult | Promise<ReadResourceResult>;

export type ResourceTemplateDefinition = {
  name: string;
  description: string;
  metadata?: ResourceMetadata;
  scopes?: MCPScope[];
  resource: ResourceTemplate;
  read: ReadResourceTemplateCallback;
};

// Optional function to assist with formatting resource results
export async function formatResult(
  value: unknown,
  uri: URL,
  init: { mimeType?: string | undefined; response?: Response | undefined },
): Promise<ReadResourceResult> {
  if (typeof value === "undefined") {
    return { contents: [] };
  }

  let contents: ReadResourceResult["contents"] = [];

  const mimeType = init.mimeType ?? init.response?.headers.get("content-type")
    ?? "";

  if (mimeType.search(/\bjson\b/g) !== -1) {
    contents = [{ uri: uri.toString(), mimeType, text: JSON.stringify(value) }];
  } else if (
    mimeType.startsWith("text/event-stream")
    && isAsyncIterable(value)
  ) {
    contents = [
      {
        uri: uri.toString(),
        mimeType: "application/json",
        text: await stringifySSEToJSON(value),
      },
    ];
  } else if (
    (mimeType.startsWith("text/") || mimeType.startsWith("application/"))
    && typeof value === "string"
  ) {
    contents = [{ uri: uri.toString(), mimeType, text: value }];
  } else if (isBinaryData(value)) {
    const blob = await valueToBase64(value);
    contents = blob == null ? [] : [{ uri: uri.toString(), blob, mimeType }];
  } else {
    throw new Error(`Unsupported content type: "${mimeType}"`);
  }

  return { contents };
}

async function stringifySSEToJSON(
  value: AsyncIterable<unknown>,
): Promise<string> {
  const payloads = [];

  for await (const chunk of value) {
    payloads.push(chunk);
  }

  return JSON.stringify(payloads);
}

export function createRegisterResource(
  logger: ConsoleLogger,
  server: McpServer,
  sdk: SpeakeasyCore,
  allowedScopes: Set<MCPScope>,
): (resource: ResourceDefinition) => void {
  return (resource: ResourceDefinition): void => {
    const scopes = resource.scopes ?? [];
    if (allowedScopes.size > 0 && scopes.length === 0) {
      return;
    }

    if (
      allowedScopes.size > 0
      && !scopes.every((s: MCPScope) => allowedScopes.has(s))
    ) {
      return;
    }

    const metadata: ResourceMetadata = {
      ...resource.metadata,
      description: resource.description,
    };

    server.resource(
      resource.name,
      resource.resource,
      metadata,
      async (uri, ctx) => resource.read(sdk, uri, ctx),
    );

    logger.debug("Registered resource", { name: resource.name });
  };
}

export function createRegisterResourceTemplate(
  logger: ConsoleLogger,
  server: McpServer,
  sdk: SpeakeasyCore,
  allowedScopes: Set<MCPScope>,
): (resource: ResourceTemplateDefinition) => void {
  return (resource: ResourceTemplateDefinition): void => {
    const scopes = resource.scopes ?? [];
    if (allowedScopes.size > 0 && scopes.length === 0) {
      return;
    }

    if (
      allowedScopes.size > 0
      && !scopes.every((s: MCPScope) => allowedScopes.has(s))
    ) {
      return;
    }

    const metadata: ResourceMetadata = {
      ...resource.metadata,
      description: resource.description,
    };

    server.resource(
      resource.name,
      resource.resource,
      metadata,
      async (uri, vars, ctx) => resource.read(sdk, uri, vars, ctx),
    );

    logger.debug("Registered resource template", { name: resource.name });
  };
}
