/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  Diagnostic,
  Diagnostic$inboundSchema,
  Diagnostic$Outbound,
  Diagnostic$outboundSchema,
} from "./diagnostic.js";

export const SuggestionType = {
  MethodNames: "method-names",
  DiagnosticsOnly: "diagnostics-only",
} as const;
export type SuggestionType = ClosedEnum<typeof SuggestionType>;

export type SuggestOptsOld = {
  diagnostics?: Array<Diagnostic> | undefined;
  suggestionType: SuggestionType;
};

/** @internal */
export const SuggestionType$inboundSchema: z.ZodNativeEnum<
  typeof SuggestionType
> = z.nativeEnum(SuggestionType);

/** @internal */
export const SuggestionType$outboundSchema: z.ZodNativeEnum<
  typeof SuggestionType
> = SuggestionType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SuggestionType$ {
  /** @deprecated use `SuggestionType$inboundSchema` instead. */
  export const inboundSchema = SuggestionType$inboundSchema;
  /** @deprecated use `SuggestionType$outboundSchema` instead. */
  export const outboundSchema = SuggestionType$outboundSchema;
}

/** @internal */
export const SuggestOptsOld$inboundSchema: z.ZodType<
  SuggestOptsOld,
  z.ZodTypeDef,
  unknown
> = z.object({
  diagnostics: z.array(Diagnostic$inboundSchema).optional(),
  suggestion_type: SuggestionType$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "suggestion_type": "suggestionType",
  });
});

/** @internal */
export type SuggestOptsOld$Outbound = {
  diagnostics?: Array<Diagnostic$Outbound> | undefined;
  suggestion_type: string;
};

/** @internal */
export const SuggestOptsOld$outboundSchema: z.ZodType<
  SuggestOptsOld$Outbound,
  z.ZodTypeDef,
  SuggestOptsOld
> = z.object({
  diagnostics: z.array(Diagnostic$outboundSchema).optional(),
  suggestionType: SuggestionType$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    suggestionType: "suggestion_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SuggestOptsOld$ {
  /** @deprecated use `SuggestOptsOld$inboundSchema` instead. */
  export const inboundSchema = SuggestOptsOld$inboundSchema;
  /** @deprecated use `SuggestOptsOld$outboundSchema` instead. */
  export const outboundSchema = SuggestOptsOld$outboundSchema;
  /** @deprecated use `SuggestOptsOld$Outbound` instead. */
  export type Outbound = SuggestOptsOld$Outbound;
}