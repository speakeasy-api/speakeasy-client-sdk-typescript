/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetGitHubActionRequest = {
  /**
   * The targetName of the workflow target.
   */
  targetName?: string | undefined;
  org: string;
  repo: string;
};

/** @internal */
export const GetGitHubActionRequest$inboundSchema: z.ZodType<
  GetGitHubActionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  targetName: z.string().optional(),
  org: z.string(),
  repo: z.string(),
});

/** @internal */
export type GetGitHubActionRequest$Outbound = {
  targetName?: string | undefined;
  org: string;
  repo: string;
};

/** @internal */
export const GetGitHubActionRequest$outboundSchema: z.ZodType<
  GetGitHubActionRequest$Outbound,
  z.ZodTypeDef,
  GetGitHubActionRequest
> = z.object({
  targetName: z.string().optional(),
  org: z.string(),
  repo: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGitHubActionRequest$ {
  /** @deprecated use `GetGitHubActionRequest$inboundSchema` instead. */
  export const inboundSchema = GetGitHubActionRequest$inboundSchema;
  /** @deprecated use `GetGitHubActionRequest$outboundSchema` instead. */
  export const outboundSchema = GetGitHubActionRequest$outboundSchema;
  /** @deprecated use `GetGitHubActionRequest$Outbound` instead. */
  export type Outbound = GetGitHubActionRequest$Outbound;
}

export function getGitHubActionRequestToJSON(
  getGitHubActionRequest: GetGitHubActionRequest,
): string {
  return JSON.stringify(
    GetGitHubActionRequest$outboundSchema.parse(getGitHubActionRequest),
  );
}

export function getGitHubActionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetGitHubActionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGitHubActionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGitHubActionRequest' from JSON`,
  );
}
