/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

/**
 * The `Status` type defines a logical error model
 */
export type ErrorT = {
  /**
   * A developer-facing error message.
   */
  message: string;
  /**
   * The HTTP status code
   */
  statusCode: number;
};

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    message: z.string(),
    status_code: z.number().int(),
  }).transform((v) => {
    return remap$(v, {
      "status_code": "statusCode",
    });
  });

/** @internal */
export type ErrorT$Outbound = {
  message: string;
  status_code: number;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.object({
  message: z.string(),
  statusCode: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}
