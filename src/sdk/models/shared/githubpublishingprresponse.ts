/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

/**
 * Open generation PRs pending publishing
 */
export type GithubPublishingPRResponse = {
  generationPullRequest?: string | undefined;
  pendingVersion?: string | undefined;
};

/** @internal */
export const GithubPublishingPRResponse$inboundSchema: z.ZodType<
  GithubPublishingPRResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  generation_pull_request: z.string().optional(),
  pending_version: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "generation_pull_request": "generationPullRequest",
    "pending_version": "pendingVersion",
  });
});

/** @internal */
export type GithubPublishingPRResponse$Outbound = {
  generation_pull_request?: string | undefined;
  pending_version?: string | undefined;
};

/** @internal */
export const GithubPublishingPRResponse$outboundSchema: z.ZodType<
  GithubPublishingPRResponse$Outbound,
  z.ZodTypeDef,
  GithubPublishingPRResponse
> = z.object({
  generationPullRequest: z.string().optional(),
  pendingVersion: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    generationPullRequest: "generation_pull_request",
    pendingVersion: "pending_version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubPublishingPRResponse$ {
  /** @deprecated use `GithubPublishingPRResponse$inboundSchema` instead. */
  export const inboundSchema = GithubPublishingPRResponse$inboundSchema;
  /** @deprecated use `GithubPublishingPRResponse$outboundSchema` instead. */
  export const outboundSchema = GithubPublishingPRResponse$outboundSchema;
  /** @deprecated use `GithubPublishingPRResponse$Outbound` instead. */
  export type Outbound = GithubPublishingPRResponse$Outbound;
}
