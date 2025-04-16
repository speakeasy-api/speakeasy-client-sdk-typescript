/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GrantUserAccessToWorkspaceGlobals = {
  workspaceId?: string | undefined;
};

export type GrantUserAccessToWorkspaceRequest = {
  /**
   * Unique identifier of the workspace.
   */
  workspaceId?: string | undefined;
  /**
   * Email of the user to grant access to.
   */
  email: string;
};

/** @internal */
export const GrantUserAccessToWorkspaceGlobals$inboundSchema: z.ZodType<
  GrantUserAccessToWorkspaceGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type GrantUserAccessToWorkspaceGlobals$Outbound = {
  workspace_id?: string | undefined;
};

/** @internal */
export const GrantUserAccessToWorkspaceGlobals$outboundSchema: z.ZodType<
  GrantUserAccessToWorkspaceGlobals$Outbound,
  z.ZodTypeDef,
  GrantUserAccessToWorkspaceGlobals
> = z.object({
  workspaceId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GrantUserAccessToWorkspaceGlobals$ {
  /** @deprecated use `GrantUserAccessToWorkspaceGlobals$inboundSchema` instead. */
  export const inboundSchema = GrantUserAccessToWorkspaceGlobals$inboundSchema;
  /** @deprecated use `GrantUserAccessToWorkspaceGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GrantUserAccessToWorkspaceGlobals$outboundSchema;
  /** @deprecated use `GrantUserAccessToWorkspaceGlobals$Outbound` instead. */
  export type Outbound = GrantUserAccessToWorkspaceGlobals$Outbound;
}

export function grantUserAccessToWorkspaceGlobalsToJSON(
  grantUserAccessToWorkspaceGlobals: GrantUserAccessToWorkspaceGlobals,
): string {
  return JSON.stringify(
    GrantUserAccessToWorkspaceGlobals$outboundSchema.parse(
      grantUserAccessToWorkspaceGlobals,
    ),
  );
}

export function grantUserAccessToWorkspaceGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GrantUserAccessToWorkspaceGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GrantUserAccessToWorkspaceGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GrantUserAccessToWorkspaceGlobals' from JSON`,
  );
}

/** @internal */
export const GrantUserAccessToWorkspaceRequest$inboundSchema: z.ZodType<
  GrantUserAccessToWorkspaceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string().optional(),
  email: z.string(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type GrantUserAccessToWorkspaceRequest$Outbound = {
  workspace_id?: string | undefined;
  email: string;
};

/** @internal */
export const GrantUserAccessToWorkspaceRequest$outboundSchema: z.ZodType<
  GrantUserAccessToWorkspaceRequest$Outbound,
  z.ZodTypeDef,
  GrantUserAccessToWorkspaceRequest
> = z.object({
  workspaceId: z.string().optional(),
  email: z.string(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GrantUserAccessToWorkspaceRequest$ {
  /** @deprecated use `GrantUserAccessToWorkspaceRequest$inboundSchema` instead. */
  export const inboundSchema = GrantUserAccessToWorkspaceRequest$inboundSchema;
  /** @deprecated use `GrantUserAccessToWorkspaceRequest$outboundSchema` instead. */
  export const outboundSchema =
    GrantUserAccessToWorkspaceRequest$outboundSchema;
  /** @deprecated use `GrantUserAccessToWorkspaceRequest$Outbound` instead. */
  export type Outbound = GrantUserAccessToWorkspaceRequest$Outbound;
}

export function grantUserAccessToWorkspaceRequestToJSON(
  grantUserAccessToWorkspaceRequest: GrantUserAccessToWorkspaceRequest,
): string {
  return JSON.stringify(
    GrantUserAccessToWorkspaceRequest$outboundSchema.parse(
      grantUserAccessToWorkspaceRequest,
    ),
  );
}

export function grantUserAccessToWorkspaceRequestFromJSON(
  jsonString: string,
): SafeParseResult<GrantUserAccessToWorkspaceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GrantUserAccessToWorkspaceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GrantUserAccessToWorkspaceRequest' from JSON`,
  );
}
