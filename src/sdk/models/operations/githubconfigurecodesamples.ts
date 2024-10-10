/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GithubConfigureCodeSamplesResponse =
  | shared.ErrorT
  | shared.GithubConfigureCodeSamplesResponse;

/** @internal */
export const GithubConfigureCodeSamplesResponse$inboundSchema: z.ZodType<
  GithubConfigureCodeSamplesResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.ErrorT$inboundSchema,
  shared.GithubConfigureCodeSamplesResponse$inboundSchema,
]);

/** @internal */
export type GithubConfigureCodeSamplesResponse$Outbound =
  | shared.ErrorT$Outbound
  | shared.GithubConfigureCodeSamplesResponse$Outbound;

/** @internal */
export const GithubConfigureCodeSamplesResponse$outboundSchema: z.ZodType<
  GithubConfigureCodeSamplesResponse$Outbound,
  z.ZodTypeDef,
  GithubConfigureCodeSamplesResponse
> = z.union([
  shared.ErrorT$outboundSchema,
  shared.GithubConfigureCodeSamplesResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubConfigureCodeSamplesResponse$ {
  /** @deprecated use `GithubConfigureCodeSamplesResponse$inboundSchema` instead. */
  export const inboundSchema = GithubConfigureCodeSamplesResponse$inboundSchema;
  /** @deprecated use `GithubConfigureCodeSamplesResponse$outboundSchema` instead. */
  export const outboundSchema =
    GithubConfigureCodeSamplesResponse$outboundSchema;
  /** @deprecated use `GithubConfigureCodeSamplesResponse$Outbound` instead. */
  export type Outbound = GithubConfigureCodeSamplesResponse$Outbound;
}