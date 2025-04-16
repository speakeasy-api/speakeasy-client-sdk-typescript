/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetPublishingTokenByIDRequest = {
  /**
   * Unique identifier of the publishing token.
   */
  tokenID: string;
};

/** @internal */
export const GetPublishingTokenByIDRequest$inboundSchema: z.ZodType<
  GetPublishingTokenByIDRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  tokenID: z.string(),
});

/** @internal */
export type GetPublishingTokenByIDRequest$Outbound = {
  tokenID: string;
};

/** @internal */
export const GetPublishingTokenByIDRequest$outboundSchema: z.ZodType<
  GetPublishingTokenByIDRequest$Outbound,
  z.ZodTypeDef,
  GetPublishingTokenByIDRequest
> = z.object({
  tokenID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPublishingTokenByIDRequest$ {
  /** @deprecated use `GetPublishingTokenByIDRequest$inboundSchema` instead. */
  export const inboundSchema = GetPublishingTokenByIDRequest$inboundSchema;
  /** @deprecated use `GetPublishingTokenByIDRequest$outboundSchema` instead. */
  export const outboundSchema = GetPublishingTokenByIDRequest$outboundSchema;
  /** @deprecated use `GetPublishingTokenByIDRequest$Outbound` instead. */
  export type Outbound = GetPublishingTokenByIDRequest$Outbound;
}

export function getPublishingTokenByIDRequestToJSON(
  getPublishingTokenByIDRequest: GetPublishingTokenByIDRequest,
): string {
  return JSON.stringify(
    GetPublishingTokenByIDRequest$outboundSchema.parse(
      getPublishingTokenByIDRequest,
    ),
  );
}

export function getPublishingTokenByIDRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetPublishingTokenByIDRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPublishingTokenByIDRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPublishingTokenByIDRequest' from JSON`,
  );
}
