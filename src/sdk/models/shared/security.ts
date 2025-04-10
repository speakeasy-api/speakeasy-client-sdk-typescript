/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Security = {
  apiKey?: string | undefined;
  bearer?: string | undefined;
  workspaceIdentifier?: string | undefined;
};

/** @internal */
export const Security$inboundSchema: z.ZodType<
  Security,
  z.ZodTypeDef,
  unknown
> = z.object({
  APIKey: z.string().optional(),
  Bearer: z.string().optional(),
  WorkspaceIdentifier: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "APIKey": "apiKey",
    "Bearer": "bearer",
    "WorkspaceIdentifier": "workspaceIdentifier",
  });
});

/** @internal */
export type Security$Outbound = {
  APIKey?: string | undefined;
  Bearer?: string | undefined;
  WorkspaceIdentifier?: string | undefined;
};

/** @internal */
export const Security$outboundSchema: z.ZodType<
  Security$Outbound,
  z.ZodTypeDef,
  Security
> = z.object({
  apiKey: z.string().optional(),
  bearer: z.string().optional(),
  workspaceIdentifier: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    apiKey: "APIKey",
    bearer: "Bearer",
    workspaceIdentifier: "WorkspaceIdentifier",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Security$ {
  /** @deprecated use `Security$inboundSchema` instead. */
  export const inboundSchema = Security$inboundSchema;
  /** @deprecated use `Security$outboundSchema` instead. */
  export const outboundSchema = Security$outboundSchema;
  /** @deprecated use `Security$Outbound` instead. */
  export type Outbound = Security$Outbound;
}

export function securityToJSON(security: Security): string {
  return JSON.stringify(Security$outboundSchema.parse(security));
}

export function securityFromJSON(
  jsonString: string,
): SafeParseResult<Security, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Security$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Security' from JSON`,
  );
}
