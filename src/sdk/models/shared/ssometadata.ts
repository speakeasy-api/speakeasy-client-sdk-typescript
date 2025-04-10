/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * SSO metadata for a workspace
 */
export type SSOMetadata = {
  ssoActivated: boolean;
  ssoDomains: Array<string>;
};

/** @internal */
export const SSOMetadata$inboundSchema: z.ZodType<
  SSOMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  sso_activated: z.boolean(),
  sso_domains: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "sso_activated": "ssoActivated",
    "sso_domains": "ssoDomains",
  });
});

/** @internal */
export type SSOMetadata$Outbound = {
  sso_activated: boolean;
  sso_domains: Array<string>;
};

/** @internal */
export const SSOMetadata$outboundSchema: z.ZodType<
  SSOMetadata$Outbound,
  z.ZodTypeDef,
  SSOMetadata
> = z.object({
  ssoActivated: z.boolean(),
  ssoDomains: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    ssoActivated: "sso_activated",
    ssoDomains: "sso_domains",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SSOMetadata$ {
  /** @deprecated use `SSOMetadata$inboundSchema` instead. */
  export const inboundSchema = SSOMetadata$inboundSchema;
  /** @deprecated use `SSOMetadata$outboundSchema` instead. */
  export const outboundSchema = SSOMetadata$outboundSchema;
  /** @deprecated use `SSOMetadata$Outbound` instead. */
  export type Outbound = SSOMetadata$Outbound;
}

export function ssoMetadataToJSON(ssoMetadata: SSOMetadata): string {
  return JSON.stringify(SSOMetadata$outboundSchema.parse(ssoMetadata));
}

export function ssoMetadataFromJSON(
  jsonString: string,
): SafeParseResult<SSOMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SSOMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SSOMetadata' from JSON`,
  );
}
