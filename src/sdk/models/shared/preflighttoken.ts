/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

/**
 * A PreflightToken is a token that allows access to the OCI distribution endpoints.
 */
export type PreflightToken = {
  authToken?: string | undefined;
};

/** @internal */
export const PreflightToken$inboundSchema: z.ZodType<
  PreflightToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  auth_token: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "auth_token": "authToken",
  });
});

/** @internal */
export type PreflightToken$Outbound = {
  auth_token?: string | undefined;
};

/** @internal */
export const PreflightToken$outboundSchema: z.ZodType<
  PreflightToken$Outbound,
  z.ZodTypeDef,
  PreflightToken
> = z.object({
  authToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    authToken: "auth_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PreflightToken$ {
  /** @deprecated use `PreflightToken$inboundSchema` instead. */
  export const inboundSchema = PreflightToken$inboundSchema;
  /** @deprecated use `PreflightToken$outboundSchema` instead. */
  export const outboundSchema = PreflightToken$outboundSchema;
  /** @deprecated use `PreflightToken$Outbound` instead. */
  export type Outbound = PreflightToken$Outbound;
}
