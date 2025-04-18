/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WorkspaceFeatureFlag,
  WorkspaceFeatureFlag$inboundSchema,
  WorkspaceFeatureFlag$outboundSchema,
} from "./workspacefeatureflag.js";

/**
 * A request to add workspace feature flags
 */
export type WorkspaceFeatureFlagRequest = {
  featureFlags: Array<WorkspaceFeatureFlag>;
};

/** @internal */
export const WorkspaceFeatureFlagRequest$inboundSchema: z.ZodType<
  WorkspaceFeatureFlagRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  feature_flags: z.array(WorkspaceFeatureFlag$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "feature_flags": "featureFlags",
  });
});

/** @internal */
export type WorkspaceFeatureFlagRequest$Outbound = {
  feature_flags: Array<string>;
};

/** @internal */
export const WorkspaceFeatureFlagRequest$outboundSchema: z.ZodType<
  WorkspaceFeatureFlagRequest$Outbound,
  z.ZodTypeDef,
  WorkspaceFeatureFlagRequest
> = z.object({
  featureFlags: z.array(WorkspaceFeatureFlag$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    featureFlags: "feature_flags",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkspaceFeatureFlagRequest$ {
  /** @deprecated use `WorkspaceFeatureFlagRequest$inboundSchema` instead. */
  export const inboundSchema = WorkspaceFeatureFlagRequest$inboundSchema;
  /** @deprecated use `WorkspaceFeatureFlagRequest$outboundSchema` instead. */
  export const outboundSchema = WorkspaceFeatureFlagRequest$outboundSchema;
  /** @deprecated use `WorkspaceFeatureFlagRequest$Outbound` instead. */
  export type Outbound = WorkspaceFeatureFlagRequest$Outbound;
}

export function workspaceFeatureFlagRequestToJSON(
  workspaceFeatureFlagRequest: WorkspaceFeatureFlagRequest,
): string {
  return JSON.stringify(
    WorkspaceFeatureFlagRequest$outboundSchema.parse(
      workspaceFeatureFlagRequest,
    ),
  );
}

export function workspaceFeatureFlagRequestFromJSON(
  jsonString: string,
): SafeParseResult<WorkspaceFeatureFlagRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkspaceFeatureFlagRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkspaceFeatureFlagRequest' from JSON`,
  );
}
