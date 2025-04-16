/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccessTokenRequest = {
  /**
   * The workspace ID
   */
  workspaceId: string;
};

/** @internal */
export const GetAccessTokenRequest$inboundSchema: z.ZodType<
  GetAccessTokenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type GetAccessTokenRequest$Outbound = {
  workspace_id: string;
};

/** @internal */
export const GetAccessTokenRequest$outboundSchema: z.ZodType<
  GetAccessTokenRequest$Outbound,
  z.ZodTypeDef,
  GetAccessTokenRequest
> = z.object({
  workspaceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccessTokenRequest$ {
  /** @deprecated use `GetAccessTokenRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccessTokenRequest$inboundSchema;
  /** @deprecated use `GetAccessTokenRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccessTokenRequest$outboundSchema;
  /** @deprecated use `GetAccessTokenRequest$Outbound` instead. */
  export type Outbound = GetAccessTokenRequest$Outbound;
}

export function getAccessTokenRequestToJSON(
  getAccessTokenRequest: GetAccessTokenRequest,
): string {
  return JSON.stringify(
    GetAccessTokenRequest$outboundSchema.parse(getAccessTokenRequest),
  );
}

export function getAccessTokenRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccessTokenRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccessTokenRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccessTokenRequest' from JSON`,
  );
}
