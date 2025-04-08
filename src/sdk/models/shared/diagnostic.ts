/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Diagnostic = {
  /**
   * Help message for how to fix the issue
   */
  helpMessage?: string | undefined;
  /**
   * Message describing the issue
   */
  message: string;
  /**
   * Schema path to the issue
   */
  path: Array<string>;
  /**
   * Issue type
   */
  type: string;
};

/** @internal */
export const Diagnostic$inboundSchema: z.ZodType<
  Diagnostic,
  z.ZodTypeDef,
  unknown
> = z.object({
  helpMessage: z.string().optional(),
  message: z.string(),
  path: z.array(z.string()),
  type: z.string(),
});

/** @internal */
export type Diagnostic$Outbound = {
  helpMessage?: string | undefined;
  message: string;
  path: Array<string>;
  type: string;
};

/** @internal */
export const Diagnostic$outboundSchema: z.ZodType<
  Diagnostic$Outbound,
  z.ZodTypeDef,
  Diagnostic
> = z.object({
  helpMessage: z.string().optional(),
  message: z.string(),
  path: z.array(z.string()),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Diagnostic$ {
  /** @deprecated use `Diagnostic$inboundSchema` instead. */
  export const inboundSchema = Diagnostic$inboundSchema;
  /** @deprecated use `Diagnostic$outboundSchema` instead. */
  export const outboundSchema = Diagnostic$outboundSchema;
  /** @deprecated use `Diagnostic$Outbound` instead. */
  export type Outbound = Diagnostic$Outbound;
}

export function diagnosticToJSON(diagnostic: Diagnostic): string {
  return JSON.stringify(Diagnostic$outboundSchema.parse(diagnostic));
}

export function diagnosticFromJSON(
  jsonString: string,
): SafeParseResult<Diagnostic, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Diagnostic$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Diagnostic' from JSON`,
  );
}
