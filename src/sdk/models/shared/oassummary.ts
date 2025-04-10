/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OASInfo,
  OASInfo$inboundSchema,
  OASInfo$Outbound,
  OASInfo$outboundSchema,
} from "./oasinfo.js";
import {
  OASOperation,
  OASOperation$inboundSchema,
  OASOperation$Outbound,
  OASOperation$outboundSchema,
} from "./oasoperation.js";

export type OASSummary = {
  info: OASInfo;
  operations: Array<OASOperation>;
};

/** @internal */
export const OASSummary$inboundSchema: z.ZodType<
  OASSummary,
  z.ZodTypeDef,
  unknown
> = z.object({
  info: OASInfo$inboundSchema,
  operations: z.array(OASOperation$inboundSchema),
});

/** @internal */
export type OASSummary$Outbound = {
  info: OASInfo$Outbound;
  operations: Array<OASOperation$Outbound>;
};

/** @internal */
export const OASSummary$outboundSchema: z.ZodType<
  OASSummary$Outbound,
  z.ZodTypeDef,
  OASSummary
> = z.object({
  info: OASInfo$outboundSchema,
  operations: z.array(OASOperation$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OASSummary$ {
  /** @deprecated use `OASSummary$inboundSchema` instead. */
  export const inboundSchema = OASSummary$inboundSchema;
  /** @deprecated use `OASSummary$outboundSchema` instead. */
  export const outboundSchema = OASSummary$outboundSchema;
  /** @deprecated use `OASSummary$Outbound` instead. */
  export type Outbound = OASSummary$Outbound;
}

export function oasSummaryToJSON(oasSummary: OASSummary): string {
  return JSON.stringify(OASSummary$outboundSchema.parse(oasSummary));
}

export function oasSummaryFromJSON(
  jsonString: string,
): SafeParseResult<OASSummary, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OASSummary$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OASSummary' from JSON`,
  );
}
