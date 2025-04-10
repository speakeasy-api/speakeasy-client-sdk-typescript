/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Annotations,
  Annotations$inboundSchema,
  Annotations$Outbound,
  Annotations$outboundSchema,
} from "./annotations.js";

/**
 * V2 descriptor
 */
export type V2Descriptor = {
  /**
   * Annotations
   */
  annotations?: Annotations | undefined;
  /**
   * Digest
   */
  digest?: string | undefined;
  /**
   * Media type
   */
  mediaType?: string | undefined;
  /**
   * Size
   */
  size?: number | undefined;
};

/** @internal */
export const V2Descriptor$inboundSchema: z.ZodType<
  V2Descriptor,
  z.ZodTypeDef,
  unknown
> = z.object({
  annotations: Annotations$inboundSchema.optional(),
  digest: z.string().optional(),
  mediaType: z.string().optional(),
  size: z.number().int().optional(),
});

/** @internal */
export type V2Descriptor$Outbound = {
  annotations?: Annotations$Outbound | undefined;
  digest?: string | undefined;
  mediaType?: string | undefined;
  size?: number | undefined;
};

/** @internal */
export const V2Descriptor$outboundSchema: z.ZodType<
  V2Descriptor$Outbound,
  z.ZodTypeDef,
  V2Descriptor
> = z.object({
  annotations: Annotations$outboundSchema.optional(),
  digest: z.string().optional(),
  mediaType: z.string().optional(),
  size: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Descriptor$ {
  /** @deprecated use `V2Descriptor$inboundSchema` instead. */
  export const inboundSchema = V2Descriptor$inboundSchema;
  /** @deprecated use `V2Descriptor$outboundSchema` instead. */
  export const outboundSchema = V2Descriptor$outboundSchema;
  /** @deprecated use `V2Descriptor$Outbound` instead. */
  export type Outbound = V2Descriptor$Outbound;
}

export function v2DescriptorToJSON(v2Descriptor: V2Descriptor): string {
  return JSON.stringify(V2Descriptor$outboundSchema.parse(v2Descriptor));
}

export function v2DescriptorFromJSON(
  jsonString: string,
): SafeParseResult<V2Descriptor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2Descriptor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2Descriptor' from JSON`,
  );
}
