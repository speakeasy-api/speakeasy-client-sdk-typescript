/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListRemoteSourcesRequest = {
  namespaceName: string;
};

export type ListRemoteSourcesResponse = shared.ErrorT | shared.RemoteSource;

/** @internal */
export const ListRemoteSourcesRequest$inboundSchema: z.ZodType<
  ListRemoteSourcesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  namespace_name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "namespace_name": "namespaceName",
  });
});

/** @internal */
export type ListRemoteSourcesRequest$Outbound = {
  namespace_name: string;
};

/** @internal */
export const ListRemoteSourcesRequest$outboundSchema: z.ZodType<
  ListRemoteSourcesRequest$Outbound,
  z.ZodTypeDef,
  ListRemoteSourcesRequest
> = z.object({
  namespaceName: z.string(),
}).transform((v) => {
  return remap$(v, {
    namespaceName: "namespace_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRemoteSourcesRequest$ {
  /** @deprecated use `ListRemoteSourcesRequest$inboundSchema` instead. */
  export const inboundSchema = ListRemoteSourcesRequest$inboundSchema;
  /** @deprecated use `ListRemoteSourcesRequest$outboundSchema` instead. */
  export const outboundSchema = ListRemoteSourcesRequest$outboundSchema;
  /** @deprecated use `ListRemoteSourcesRequest$Outbound` instead. */
  export type Outbound = ListRemoteSourcesRequest$Outbound;
}

export function listRemoteSourcesRequestToJSON(
  listRemoteSourcesRequest: ListRemoteSourcesRequest,
): string {
  return JSON.stringify(
    ListRemoteSourcesRequest$outboundSchema.parse(listRemoteSourcesRequest),
  );
}

export function listRemoteSourcesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListRemoteSourcesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListRemoteSourcesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListRemoteSourcesRequest' from JSON`,
  );
}

/** @internal */
export const ListRemoteSourcesResponse$inboundSchema: z.ZodType<
  ListRemoteSourcesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([shared.ErrorT$inboundSchema, shared.RemoteSource$inboundSchema]);

/** @internal */
export type ListRemoteSourcesResponse$Outbound =
  | shared.ErrorT$Outbound
  | shared.RemoteSource$Outbound;

/** @internal */
export const ListRemoteSourcesResponse$outboundSchema: z.ZodType<
  ListRemoteSourcesResponse$Outbound,
  z.ZodTypeDef,
  ListRemoteSourcesResponse
> = z.union([shared.ErrorT$outboundSchema, shared.RemoteSource$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRemoteSourcesResponse$ {
  /** @deprecated use `ListRemoteSourcesResponse$inboundSchema` instead. */
  export const inboundSchema = ListRemoteSourcesResponse$inboundSchema;
  /** @deprecated use `ListRemoteSourcesResponse$outboundSchema` instead. */
  export const outboundSchema = ListRemoteSourcesResponse$outboundSchema;
  /** @deprecated use `ListRemoteSourcesResponse$Outbound` instead. */
  export type Outbound = ListRemoteSourcesResponse$Outbound;
}

export function listRemoteSourcesResponseToJSON(
  listRemoteSourcesResponse: ListRemoteSourcesResponse,
): string {
  return JSON.stringify(
    ListRemoteSourcesResponse$outboundSchema.parse(listRemoteSourcesResponse),
  );
}

export function listRemoteSourcesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListRemoteSourcesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListRemoteSourcesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListRemoteSourcesResponse' from JSON`,
  );
}
