/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type OASOperation = {
  description: string;
  groupOverride?: string | undefined;
  method: string;
  methodNameOverride?: string | undefined;
  operationId: string;
  path: string;
  tags: Array<string>;
};

/** @internal */
export const OASOperation$inboundSchema: z.ZodType<
  OASOperation,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string(),
  group_override: z.string().optional(),
  method: z.string(),
  method_name_override: z.string().optional(),
  operation_id: z.string(),
  path: z.string(),
  tags: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "group_override": "groupOverride",
    "method_name_override": "methodNameOverride",
    "operation_id": "operationId",
  });
});

/** @internal */
export type OASOperation$Outbound = {
  description: string;
  group_override?: string | undefined;
  method: string;
  method_name_override?: string | undefined;
  operation_id: string;
  path: string;
  tags: Array<string>;
};

/** @internal */
export const OASOperation$outboundSchema: z.ZodType<
  OASOperation$Outbound,
  z.ZodTypeDef,
  OASOperation
> = z.object({
  description: z.string(),
  groupOverride: z.string().optional(),
  method: z.string(),
  methodNameOverride: z.string().optional(),
  operationId: z.string(),
  path: z.string(),
  tags: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    groupOverride: "group_override",
    methodNameOverride: "method_name_override",
    operationId: "operation_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OASOperation$ {
  /** @deprecated use `OASOperation$inboundSchema` instead. */
  export const inboundSchema = OASOperation$inboundSchema;
  /** @deprecated use `OASOperation$outboundSchema` instead. */
  export const outboundSchema = OASOperation$outboundSchema;
  /** @deprecated use `OASOperation$Outbound` instead. */
  export type Outbound = OASOperation$Outbound;
}

export function oasOperationToJSON(oasOperation: OASOperation): string {
  return JSON.stringify(OASOperation$outboundSchema.parse(oasOperation));
}

export function oasOperationFromJSON(
  jsonString: string,
): SafeParseResult<OASOperation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OASOperation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OASOperation' from JSON`,
  );
}
