/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetCodeSamplePreviewAsyncRequest = {
  /**
   * The ID of the job to check the status and retrieve results
   */
  jobID: string;
};

/**
 * Job is still in progress
 */
export type GetCodeSamplePreviewAsyncResponseBody = {
  /**
   * The current status of the job. Possible values are `pending` or `running`.
   */
  status: shared.CodeSamplesJobStatus;
};

export type GetCodeSamplePreviewAsyncResponse =
  | shared.UsageSnippets
  | GetCodeSamplePreviewAsyncResponseBody;

/** @internal */
export const GetCodeSamplePreviewAsyncRequest$inboundSchema: z.ZodType<
  GetCodeSamplePreviewAsyncRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  jobID: z.string(),
});

/** @internal */
export type GetCodeSamplePreviewAsyncRequest$Outbound = {
  jobID: string;
};

/** @internal */
export const GetCodeSamplePreviewAsyncRequest$outboundSchema: z.ZodType<
  GetCodeSamplePreviewAsyncRequest$Outbound,
  z.ZodTypeDef,
  GetCodeSamplePreviewAsyncRequest
> = z.object({
  jobID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCodeSamplePreviewAsyncRequest$ {
  /** @deprecated use `GetCodeSamplePreviewAsyncRequest$inboundSchema` instead. */
  export const inboundSchema = GetCodeSamplePreviewAsyncRequest$inboundSchema;
  /** @deprecated use `GetCodeSamplePreviewAsyncRequest$outboundSchema` instead. */
  export const outboundSchema = GetCodeSamplePreviewAsyncRequest$outboundSchema;
  /** @deprecated use `GetCodeSamplePreviewAsyncRequest$Outbound` instead. */
  export type Outbound = GetCodeSamplePreviewAsyncRequest$Outbound;
}

export function getCodeSamplePreviewAsyncRequestToJSON(
  getCodeSamplePreviewAsyncRequest: GetCodeSamplePreviewAsyncRequest,
): string {
  return JSON.stringify(
    GetCodeSamplePreviewAsyncRequest$outboundSchema.parse(
      getCodeSamplePreviewAsyncRequest,
    ),
  );
}

export function getCodeSamplePreviewAsyncRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCodeSamplePreviewAsyncRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCodeSamplePreviewAsyncRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCodeSamplePreviewAsyncRequest' from JSON`,
  );
}

/** @internal */
export const GetCodeSamplePreviewAsyncResponseBody$inboundSchema: z.ZodType<
  GetCodeSamplePreviewAsyncResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: shared.CodeSamplesJobStatus$inboundSchema,
});

/** @internal */
export type GetCodeSamplePreviewAsyncResponseBody$Outbound = {
  status: string;
};

/** @internal */
export const GetCodeSamplePreviewAsyncResponseBody$outboundSchema: z.ZodType<
  GetCodeSamplePreviewAsyncResponseBody$Outbound,
  z.ZodTypeDef,
  GetCodeSamplePreviewAsyncResponseBody
> = z.object({
  status: shared.CodeSamplesJobStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCodeSamplePreviewAsyncResponseBody$ {
  /** @deprecated use `GetCodeSamplePreviewAsyncResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetCodeSamplePreviewAsyncResponseBody$inboundSchema;
  /** @deprecated use `GetCodeSamplePreviewAsyncResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetCodeSamplePreviewAsyncResponseBody$outboundSchema;
  /** @deprecated use `GetCodeSamplePreviewAsyncResponseBody$Outbound` instead. */
  export type Outbound = GetCodeSamplePreviewAsyncResponseBody$Outbound;
}

export function getCodeSamplePreviewAsyncResponseBodyToJSON(
  getCodeSamplePreviewAsyncResponseBody: GetCodeSamplePreviewAsyncResponseBody,
): string {
  return JSON.stringify(
    GetCodeSamplePreviewAsyncResponseBody$outboundSchema.parse(
      getCodeSamplePreviewAsyncResponseBody,
    ),
  );
}

export function getCodeSamplePreviewAsyncResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetCodeSamplePreviewAsyncResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetCodeSamplePreviewAsyncResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCodeSamplePreviewAsyncResponseBody' from JSON`,
  );
}

/** @internal */
export const GetCodeSamplePreviewAsyncResponse$inboundSchema: z.ZodType<
  GetCodeSamplePreviewAsyncResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.UsageSnippets$inboundSchema,
  z.lazy(() => GetCodeSamplePreviewAsyncResponseBody$inboundSchema),
]);

/** @internal */
export type GetCodeSamplePreviewAsyncResponse$Outbound =
  | shared.UsageSnippets$Outbound
  | GetCodeSamplePreviewAsyncResponseBody$Outbound;

/** @internal */
export const GetCodeSamplePreviewAsyncResponse$outboundSchema: z.ZodType<
  GetCodeSamplePreviewAsyncResponse$Outbound,
  z.ZodTypeDef,
  GetCodeSamplePreviewAsyncResponse
> = z.union([
  shared.UsageSnippets$outboundSchema,
  z.lazy(() => GetCodeSamplePreviewAsyncResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCodeSamplePreviewAsyncResponse$ {
  /** @deprecated use `GetCodeSamplePreviewAsyncResponse$inboundSchema` instead. */
  export const inboundSchema = GetCodeSamplePreviewAsyncResponse$inboundSchema;
  /** @deprecated use `GetCodeSamplePreviewAsyncResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetCodeSamplePreviewAsyncResponse$outboundSchema;
  /** @deprecated use `GetCodeSamplePreviewAsyncResponse$Outbound` instead. */
  export type Outbound = GetCodeSamplePreviewAsyncResponse$Outbound;
}

export function getCodeSamplePreviewAsyncResponseToJSON(
  getCodeSamplePreviewAsyncResponse: GetCodeSamplePreviewAsyncResponse,
): string {
  return JSON.stringify(
    GetCodeSamplePreviewAsyncResponse$outboundSchema.parse(
      getCodeSamplePreviewAsyncResponse,
    ),
  );
}

export function getCodeSamplePreviewAsyncResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCodeSamplePreviewAsyncResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCodeSamplePreviewAsyncResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCodeSamplePreviewAsyncResponse' from JSON`,
  );
}
