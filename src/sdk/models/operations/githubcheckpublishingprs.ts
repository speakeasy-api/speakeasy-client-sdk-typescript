/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GithubCheckPublishingPRsRequest = {
  generateGenLockId: string;
  org: string;
  repo: string;
};

/** @internal */
export const GithubCheckPublishingPRsRequest$inboundSchema: z.ZodType<
  GithubCheckPublishingPRsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  generate_gen_lock_id: z.string(),
  org: z.string(),
  repo: z.string(),
}).transform((v) => {
  return remap$(v, {
    "generate_gen_lock_id": "generateGenLockId",
  });
});

/** @internal */
export type GithubCheckPublishingPRsRequest$Outbound = {
  generate_gen_lock_id: string;
  org: string;
  repo: string;
};

/** @internal */
export const GithubCheckPublishingPRsRequest$outboundSchema: z.ZodType<
  GithubCheckPublishingPRsRequest$Outbound,
  z.ZodTypeDef,
  GithubCheckPublishingPRsRequest
> = z.object({
  generateGenLockId: z.string(),
  org: z.string(),
  repo: z.string(),
}).transform((v) => {
  return remap$(v, {
    generateGenLockId: "generate_gen_lock_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubCheckPublishingPRsRequest$ {
  /** @deprecated use `GithubCheckPublishingPRsRequest$inboundSchema` instead. */
  export const inboundSchema = GithubCheckPublishingPRsRequest$inboundSchema;
  /** @deprecated use `GithubCheckPublishingPRsRequest$outboundSchema` instead. */
  export const outboundSchema = GithubCheckPublishingPRsRequest$outboundSchema;
  /** @deprecated use `GithubCheckPublishingPRsRequest$Outbound` instead. */
  export type Outbound = GithubCheckPublishingPRsRequest$Outbound;
}

export function githubCheckPublishingPRsRequestToJSON(
  githubCheckPublishingPRsRequest: GithubCheckPublishingPRsRequest,
): string {
  return JSON.stringify(
    GithubCheckPublishingPRsRequest$outboundSchema.parse(
      githubCheckPublishingPRsRequest,
    ),
  );
}

export function githubCheckPublishingPRsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GithubCheckPublishingPRsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GithubCheckPublishingPRsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GithubCheckPublishingPRsRequest' from JSON`,
  );
}
