/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GenerateCodeSamplePreviewResponse =
  | shared.ErrorT
  | ReadableStream<Uint8Array>
  | ReadableStream<Uint8Array>;

/** @internal */
export const GenerateCodeSamplePreviewResponse$inboundSchema: z.ZodType<
  GenerateCodeSamplePreviewResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.ErrorT$inboundSchema,
  z.instanceof(ReadableStream<Uint8Array>),
  z.instanceof(ReadableStream<Uint8Array>),
]);

/** @internal */
export type GenerateCodeSamplePreviewResponse$Outbound =
  | shared.ErrorT$Outbound
  | ReadableStream<Uint8Array>
  | ReadableStream<Uint8Array>;

/** @internal */
export const GenerateCodeSamplePreviewResponse$outboundSchema: z.ZodType<
  GenerateCodeSamplePreviewResponse$Outbound,
  z.ZodTypeDef,
  GenerateCodeSamplePreviewResponse
> = z.union([
  shared.ErrorT$outboundSchema,
  z.instanceof(ReadableStream<Uint8Array>),
  z.instanceof(ReadableStream<Uint8Array>),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateCodeSamplePreviewResponse$ {
  /** @deprecated use `GenerateCodeSamplePreviewResponse$inboundSchema` instead. */
  export const inboundSchema = GenerateCodeSamplePreviewResponse$inboundSchema;
  /** @deprecated use `GenerateCodeSamplePreviewResponse$outboundSchema` instead. */
  export const outboundSchema =
    GenerateCodeSamplePreviewResponse$outboundSchema;
  /** @deprecated use `GenerateCodeSamplePreviewResponse$Outbound` instead. */
  export type Outbound = GenerateCodeSamplePreviewResponse$Outbound;
}
