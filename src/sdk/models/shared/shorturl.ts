/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ShortURL = {
  fullUrl: string;
  shortUrl: string;
};

/** @internal */
export const ShortURL$inboundSchema: z.ZodType<
  ShortURL,
  z.ZodTypeDef,
  unknown
> = z.object({
  full_url: z.string(),
  short_url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "full_url": "fullUrl",
    "short_url": "shortUrl",
  });
});

/** @internal */
export type ShortURL$Outbound = {
  full_url: string;
  short_url: string;
};

/** @internal */
export const ShortURL$outboundSchema: z.ZodType<
  ShortURL$Outbound,
  z.ZodTypeDef,
  ShortURL
> = z.object({
  fullUrl: z.string(),
  shortUrl: z.string(),
}).transform((v) => {
  return remap$(v, {
    fullUrl: "full_url",
    shortUrl: "short_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShortURL$ {
  /** @deprecated use `ShortURL$inboundSchema` instead. */
  export const inboundSchema = ShortURL$inboundSchema;
  /** @deprecated use `ShortURL$outboundSchema` instead. */
  export const outboundSchema = ShortURL$outboundSchema;
  /** @deprecated use `ShortURL$Outbound` instead. */
  export type Outbound = ShortURL$Outbound;
}

export function shortURLToJSON(shortURL: ShortURL): string {
  return JSON.stringify(ShortURL$outboundSchema.parse(shortURL));
}

export function shortURLFromJSON(
  jsonString: string,
): SafeParseResult<ShortURL, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ShortURL$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ShortURL' from JSON`,
  );
}
