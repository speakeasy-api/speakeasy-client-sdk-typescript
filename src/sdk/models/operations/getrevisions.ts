/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetRevisionsRequest = {
  namespaceName: string;
  /**
   * Token to retrieve the next page of results
   */
  nextPageToken?: string | undefined;
};

export type GetRevisionsResponse = shared.ErrorT | shared.GetRevisionsResponse;

/** @internal */
export const GetRevisionsRequest$inboundSchema: z.ZodType<
  GetRevisionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  namespace_name: z.string(),
  next_page_token: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "namespace_name": "namespaceName",
    "next_page_token": "nextPageToken",
  });
});

/** @internal */
export type GetRevisionsRequest$Outbound = {
  namespace_name: string;
  next_page_token?: string | undefined;
};

/** @internal */
export const GetRevisionsRequest$outboundSchema: z.ZodType<
  GetRevisionsRequest$Outbound,
  z.ZodTypeDef,
  GetRevisionsRequest
> = z.object({
  namespaceName: z.string(),
  nextPageToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    namespaceName: "namespace_name",
    nextPageToken: "next_page_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRevisionsRequest$ {
  /** @deprecated use `GetRevisionsRequest$inboundSchema` instead. */
  export const inboundSchema = GetRevisionsRequest$inboundSchema;
  /** @deprecated use `GetRevisionsRequest$outboundSchema` instead. */
  export const outboundSchema = GetRevisionsRequest$outboundSchema;
  /** @deprecated use `GetRevisionsRequest$Outbound` instead. */
  export type Outbound = GetRevisionsRequest$Outbound;
}

export function getRevisionsRequestToJSON(
  getRevisionsRequest: GetRevisionsRequest,
): string {
  return JSON.stringify(
    GetRevisionsRequest$outboundSchema.parse(getRevisionsRequest),
  );
}

export function getRevisionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetRevisionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetRevisionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRevisionsRequest' from JSON`,
  );
}

/** @internal */
export const GetRevisionsResponse$inboundSchema: z.ZodType<
  GetRevisionsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.ErrorT$inboundSchema,
  shared.GetRevisionsResponse$inboundSchema,
]);

/** @internal */
export type GetRevisionsResponse$Outbound =
  | shared.ErrorT$Outbound
  | shared.GetRevisionsResponse$Outbound;

/** @internal */
export const GetRevisionsResponse$outboundSchema: z.ZodType<
  GetRevisionsResponse$Outbound,
  z.ZodTypeDef,
  GetRevisionsResponse
> = z.union([
  shared.ErrorT$outboundSchema,
  shared.GetRevisionsResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRevisionsResponse$ {
  /** @deprecated use `GetRevisionsResponse$inboundSchema` instead. */
  export const inboundSchema = GetRevisionsResponse$inboundSchema;
  /** @deprecated use `GetRevisionsResponse$outboundSchema` instead. */
  export const outboundSchema = GetRevisionsResponse$outboundSchema;
  /** @deprecated use `GetRevisionsResponse$Outbound` instead. */
  export type Outbound = GetRevisionsResponse$Outbound;
}

export function getRevisionsResponseToJSON(
  getRevisionsResponse: GetRevisionsResponse,
): string {
  return JSON.stringify(
    GetRevisionsResponse$outboundSchema.parse(getRevisionsResponse),
  );
}

export function getRevisionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetRevisionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetRevisionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRevisionsResponse' from JSON`,
  );
}
