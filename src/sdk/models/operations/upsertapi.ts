/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpsertApiRequest = {
  /**
   * The ID of the Api to upsert.
   */
  apiID: string;
  /**
   * A JSON representation of the Api to upsert
   */
  api: shared.ApiInput;
};

export type UpsertApiResponse = shared.ErrorT | shared.Api;

/** @internal */
export const UpsertApiRequest$inboundSchema: z.ZodType<
  UpsertApiRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  Api: shared.ApiInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Api": "api",
  });
});

/** @internal */
export type UpsertApiRequest$Outbound = {
  apiID: string;
  Api: shared.ApiInput$Outbound;
};

/** @internal */
export const UpsertApiRequest$outboundSchema: z.ZodType<
  UpsertApiRequest$Outbound,
  z.ZodTypeDef,
  UpsertApiRequest
> = z.object({
  apiID: z.string(),
  api: shared.ApiInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    api: "Api",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertApiRequest$ {
  /** @deprecated use `UpsertApiRequest$inboundSchema` instead. */
  export const inboundSchema = UpsertApiRequest$inboundSchema;
  /** @deprecated use `UpsertApiRequest$outboundSchema` instead. */
  export const outboundSchema = UpsertApiRequest$outboundSchema;
  /** @deprecated use `UpsertApiRequest$Outbound` instead. */
  export type Outbound = UpsertApiRequest$Outbound;
}

/** @internal */
export const UpsertApiResponse$inboundSchema: z.ZodType<
  UpsertApiResponse,
  z.ZodTypeDef,
  unknown
> = z.union([shared.ErrorT$inboundSchema, shared.Api$inboundSchema]);

/** @internal */
export type UpsertApiResponse$Outbound =
  | shared.ErrorT$Outbound
  | shared.Api$Outbound;

/** @internal */
export const UpsertApiResponse$outboundSchema: z.ZodType<
  UpsertApiResponse$Outbound,
  z.ZodTypeDef,
  UpsertApiResponse
> = z.union([shared.ErrorT$outboundSchema, shared.Api$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertApiResponse$ {
  /** @deprecated use `UpsertApiResponse$inboundSchema` instead. */
  export const inboundSchema = UpsertApiResponse$inboundSchema;
  /** @deprecated use `UpsertApiResponse$outboundSchema` instead. */
  export const outboundSchema = UpsertApiResponse$outboundSchema;
  /** @deprecated use `UpsertApiResponse$Outbound` instead. */
  export type Outbound = UpsertApiResponse$Outbound;
}
