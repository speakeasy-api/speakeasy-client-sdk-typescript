/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The current status of the job. Possible values are `pending` or `running`.
 */
export const CodeSamplesJobStatus = {
  Pending: "pending",
  Running: "running",
} as const;
/**
 * The current status of the job. Possible values are `pending` or `running`.
 */
export type CodeSamplesJobStatus = ClosedEnum<typeof CodeSamplesJobStatus>;

/** @internal */
export const CodeSamplesJobStatus$inboundSchema: z.ZodNativeEnum<
  typeof CodeSamplesJobStatus
> = z.nativeEnum(CodeSamplesJobStatus);

/** @internal */
export const CodeSamplesJobStatus$outboundSchema: z.ZodNativeEnum<
  typeof CodeSamplesJobStatus
> = CodeSamplesJobStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CodeSamplesJobStatus$ {
  /** @deprecated use `CodeSamplesJobStatus$inboundSchema` instead. */
  export const inboundSchema = CodeSamplesJobStatus$inboundSchema;
  /** @deprecated use `CodeSamplesJobStatus$outboundSchema` instead. */
  export const outboundSchema = CodeSamplesJobStatus$outboundSchema;
}
