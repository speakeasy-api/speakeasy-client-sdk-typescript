/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type License = {
  identifier?: string | undefined;
};

export type OASInfo = {
  description: string;
  license: License;
  summary: string;
  title: string;
  version: string;
};

/** @internal */
export const License$inboundSchema: z.ZodType<License, z.ZodTypeDef, unknown> =
  z.object({
    identifier: z.string().optional(),
  });

/** @internal */
export type License$Outbound = {
  identifier?: string | undefined;
};

/** @internal */
export const License$outboundSchema: z.ZodType<
  License$Outbound,
  z.ZodTypeDef,
  License
> = z.object({
  identifier: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace License$ {
  /** @deprecated use `License$inboundSchema` instead. */
  export const inboundSchema = License$inboundSchema;
  /** @deprecated use `License$outboundSchema` instead. */
  export const outboundSchema = License$outboundSchema;
  /** @deprecated use `License$Outbound` instead. */
  export type Outbound = License$Outbound;
}

export function licenseToJSON(license: License): string {
  return JSON.stringify(License$outboundSchema.parse(license));
}

export function licenseFromJSON(
  jsonString: string,
): SafeParseResult<License, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => License$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'License' from JSON`,
  );
}

/** @internal */
export const OASInfo$inboundSchema: z.ZodType<OASInfo, z.ZodTypeDef, unknown> =
  z.object({
    description: z.string(),
    license: z.lazy(() => License$inboundSchema),
    summary: z.string(),
    title: z.string(),
    version: z.string(),
  });

/** @internal */
export type OASInfo$Outbound = {
  description: string;
  license: License$Outbound;
  summary: string;
  title: string;
  version: string;
};

/** @internal */
export const OASInfo$outboundSchema: z.ZodType<
  OASInfo$Outbound,
  z.ZodTypeDef,
  OASInfo
> = z.object({
  description: z.string(),
  license: z.lazy(() => License$outboundSchema),
  summary: z.string(),
  title: z.string(),
  version: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OASInfo$ {
  /** @deprecated use `OASInfo$inboundSchema` instead. */
  export const inboundSchema = OASInfo$inboundSchema;
  /** @deprecated use `OASInfo$outboundSchema` instead. */
  export const outboundSchema = OASInfo$outboundSchema;
  /** @deprecated use `OASInfo$Outbound` instead. */
  export type Outbound = OASInfo$Outbound;
}

export function oasInfoToJSON(oasInfo: OASInfo): string {
  return JSON.stringify(OASInfo$outboundSchema.parse(oasInfo));
}

export function oasInfoFromJSON(
  jsonString: string,
): SafeParseResult<OASInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OASInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OASInfo' from JSON`,
  );
}
