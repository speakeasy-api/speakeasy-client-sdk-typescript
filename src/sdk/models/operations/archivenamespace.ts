/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Archived status
 */
export type ArchiveNamespaceRequestBody = {
  archived?: boolean | undefined;
};

export type ArchiveNamespaceRequest = {
  namespaceName: string;
  /**
   * Archived status
   */
  requestBody?: ArchiveNamespaceRequestBody | undefined;
};

/** @internal */
export const ArchiveNamespaceRequestBody$inboundSchema: z.ZodType<
  ArchiveNamespaceRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  archived: z.boolean().default(true),
});

/** @internal */
export type ArchiveNamespaceRequestBody$Outbound = {
  archived: boolean;
};

/** @internal */
export const ArchiveNamespaceRequestBody$outboundSchema: z.ZodType<
  ArchiveNamespaceRequestBody$Outbound,
  z.ZodTypeDef,
  ArchiveNamespaceRequestBody
> = z.object({
  archived: z.boolean().default(true),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ArchiveNamespaceRequestBody$ {
  /** @deprecated use `ArchiveNamespaceRequestBody$inboundSchema` instead. */
  export const inboundSchema = ArchiveNamespaceRequestBody$inboundSchema;
  /** @deprecated use `ArchiveNamespaceRequestBody$outboundSchema` instead. */
  export const outboundSchema = ArchiveNamespaceRequestBody$outboundSchema;
  /** @deprecated use `ArchiveNamespaceRequestBody$Outbound` instead. */
  export type Outbound = ArchiveNamespaceRequestBody$Outbound;
}

export function archiveNamespaceRequestBodyToJSON(
  archiveNamespaceRequestBody: ArchiveNamespaceRequestBody,
): string {
  return JSON.stringify(
    ArchiveNamespaceRequestBody$outboundSchema.parse(
      archiveNamespaceRequestBody,
    ),
  );
}

export function archiveNamespaceRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<ArchiveNamespaceRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ArchiveNamespaceRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ArchiveNamespaceRequestBody' from JSON`,
  );
}

/** @internal */
export const ArchiveNamespaceRequest$inboundSchema: z.ZodType<
  ArchiveNamespaceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  namespace_name: z.string(),
  RequestBody: z.lazy(() => ArchiveNamespaceRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "namespace_name": "namespaceName",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type ArchiveNamespaceRequest$Outbound = {
  namespace_name: string;
  RequestBody?: ArchiveNamespaceRequestBody$Outbound | undefined;
};

/** @internal */
export const ArchiveNamespaceRequest$outboundSchema: z.ZodType<
  ArchiveNamespaceRequest$Outbound,
  z.ZodTypeDef,
  ArchiveNamespaceRequest
> = z.object({
  namespaceName: z.string(),
  requestBody: z.lazy(() => ArchiveNamespaceRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    namespaceName: "namespace_name",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ArchiveNamespaceRequest$ {
  /** @deprecated use `ArchiveNamespaceRequest$inboundSchema` instead. */
  export const inboundSchema = ArchiveNamespaceRequest$inboundSchema;
  /** @deprecated use `ArchiveNamespaceRequest$outboundSchema` instead. */
  export const outboundSchema = ArchiveNamespaceRequest$outboundSchema;
  /** @deprecated use `ArchiveNamespaceRequest$Outbound` instead. */
  export type Outbound = ArchiveNamespaceRequest$Outbound;
}

export function archiveNamespaceRequestToJSON(
  archiveNamespaceRequest: ArchiveNamespaceRequest,
): string {
  return JSON.stringify(
    ArchiveNamespaceRequest$outboundSchema.parse(archiveNamespaceRequest),
  );
}

export function archiveNamespaceRequestFromJSON(
  jsonString: string,
): SafeParseResult<ArchiveNamespaceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ArchiveNamespaceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ArchiveNamespaceRequest' from JSON`,
  );
}
