/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PreflightRequest = {
  namespaceName: string;
};

/** @internal */
export const PreflightRequest$inboundSchema: z.ZodType<
  PreflightRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  namespace_name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "namespace_name": "namespaceName",
  });
});

/** @internal */
export type PreflightRequest$Outbound = {
  namespace_name: string;
};

/** @internal */
export const PreflightRequest$outboundSchema: z.ZodType<
  PreflightRequest$Outbound,
  z.ZodTypeDef,
  PreflightRequest
> = z.object({
  namespaceName: z.string(),
}).transform((v) => {
  return remap$(v, {
    namespaceName: "namespace_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PreflightRequest$ {
  /** @deprecated use `PreflightRequest$inboundSchema` instead. */
  export const inboundSchema = PreflightRequest$inboundSchema;
  /** @deprecated use `PreflightRequest$outboundSchema` instead. */
  export const outboundSchema = PreflightRequest$outboundSchema;
  /** @deprecated use `PreflightRequest$Outbound` instead. */
  export type Outbound = PreflightRequest$Outbound;
}

export function preflightRequestToJSON(
  preflightRequest: PreflightRequest,
): string {
  return JSON.stringify(
    PreflightRequest$outboundSchema.parse(preflightRequest),
  );
}

export function preflightRequestFromJSON(
  jsonString: string,
): SafeParseResult<PreflightRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PreflightRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PreflightRequest' from JSON`,
  );
}
