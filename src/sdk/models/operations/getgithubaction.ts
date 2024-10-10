/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GetGitHubActionRequest = {
  /**
   * The targetName of the workflow target.
   */
  targetName?: string | undefined;
  org: string;
  repo: string;
};

export type GetGitHubActionResponse =
  | shared.ErrorT
  | shared.GithubGetActionResponse;

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

/** @internal */
export const GetGitHubActionResponse$inboundSchema: z.ZodType<
  GetGitHubActionResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.ErrorT$inboundSchema,
  shared.GithubGetActionResponse$inboundSchema,
]);

/** @internal */
export type GetGitHubActionResponse$Outbound =
  | shared.ErrorT$Outbound
  | shared.GithubGetActionResponse$Outbound;

/** @internal */
export const GetGitHubActionResponse$outboundSchema: z.ZodType<
  GetGitHubActionResponse$Outbound,
  z.ZodTypeDef,
  GetGitHubActionResponse
> = z.union([
  shared.ErrorT$outboundSchema,
  shared.GithubGetActionResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGitHubActionResponse$ {
  /** @deprecated use `GetGitHubActionResponse$inboundSchema` instead. */
  export const inboundSchema = GetGitHubActionResponse$inboundSchema;
  /** @deprecated use `GetGitHubActionResponse$outboundSchema` instead. */
  export const outboundSchema = GetGitHubActionResponse$outboundSchema;
  /** @deprecated use `GetGitHubActionResponse$Outbound` instead. */
  export type Outbound = GetGitHubActionResponse$Outbound;
}