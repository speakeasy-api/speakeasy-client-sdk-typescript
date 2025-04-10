/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type OrganizationUsage = {
  /**
   * Indicates if the features are accessible
   */
  accessible: boolean;
  /**
   * Features that are accessible
   */
  accessibleFeatures: Array<string>;
  /**
   * List of generation lock IDs
   */
  genLockIds: Array<string>;
  /**
   * The programming language used
   */
  language: string;
  /**
   * Maximum Number of operations per SDK specific in contract
   */
  maxOperations: number;
  /**
   * Number of operations performed
   */
  numberOfOperations: number;
  /**
   * Features that have been used
   */
  usedFeatures: Array<string>;
  /**
   * List of workspace IDs
   */
  workspaces: Array<string>;
};

/** @internal */
export const OrganizationUsage$inboundSchema: z.ZodType<
  OrganizationUsage,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessible: z.boolean(),
  accessible_features: z.array(z.string()),
  gen_lock_ids: z.array(z.string()),
  language: z.string(),
  max_operations: z.number().int(),
  number_of_operations: z.number().int(),
  used_features: z.array(z.string()),
  workspaces: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "accessible_features": "accessibleFeatures",
    "gen_lock_ids": "genLockIds",
    "max_operations": "maxOperations",
    "number_of_operations": "numberOfOperations",
    "used_features": "usedFeatures",
  });
});

/** @internal */
export type OrganizationUsage$Outbound = {
  accessible: boolean;
  accessible_features: Array<string>;
  gen_lock_ids: Array<string>;
  language: string;
  max_operations: number;
  number_of_operations: number;
  used_features: Array<string>;
  workspaces: Array<string>;
};

/** @internal */
export const OrganizationUsage$outboundSchema: z.ZodType<
  OrganizationUsage$Outbound,
  z.ZodTypeDef,
  OrganizationUsage
> = z.object({
  accessible: z.boolean(),
  accessibleFeatures: z.array(z.string()),
  genLockIds: z.array(z.string()),
  language: z.string(),
  maxOperations: z.number().int(),
  numberOfOperations: z.number().int(),
  usedFeatures: z.array(z.string()),
  workspaces: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    accessibleFeatures: "accessible_features",
    genLockIds: "gen_lock_ids",
    maxOperations: "max_operations",
    numberOfOperations: "number_of_operations",
    usedFeatures: "used_features",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrganizationUsage$ {
  /** @deprecated use `OrganizationUsage$inboundSchema` instead. */
  export const inboundSchema = OrganizationUsage$inboundSchema;
  /** @deprecated use `OrganizationUsage$outboundSchema` instead. */
  export const outboundSchema = OrganizationUsage$outboundSchema;
  /** @deprecated use `OrganizationUsage$Outbound` instead. */
  export type Outbound = OrganizationUsage$Outbound;
}

export function organizationUsageToJSON(
  organizationUsage: OrganizationUsage,
): string {
  return JSON.stringify(
    OrganizationUsage$outboundSchema.parse(organizationUsage),
  );
}

export function organizationUsageFromJSON(
  jsonString: string,
): SafeParseResult<OrganizationUsage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrganizationUsage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrganizationUsage' from JSON`,
  );
}
