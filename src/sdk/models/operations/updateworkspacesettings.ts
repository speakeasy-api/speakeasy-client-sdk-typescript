/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateWorkspaceSettingsGlobals = {
  workspaceId?: string | undefined;
};

export type UpdateWorkspaceSettingsRequest = {
  /**
   * Unique identifier of the workspace.
   */
  workspaceId?: string | undefined;
  /**
   * The workspace settings to update.
   */
  workspaceSettings: shared.WorkspaceSettings;
};

/** @internal */
export const UpdateWorkspaceSettingsGlobals$inboundSchema: z.ZodType<
  UpdateWorkspaceSettingsGlobals,
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
export type UpdateWorkspaceSettingsGlobals$Outbound = {
  workspace_id?: string | undefined;
};

/** @internal */
export const UpdateWorkspaceSettingsGlobals$outboundSchema: z.ZodType<
  UpdateWorkspaceSettingsGlobals$Outbound,
  z.ZodTypeDef,
  UpdateWorkspaceSettingsGlobals
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
export namespace UpdateWorkspaceSettingsGlobals$ {
  /** @deprecated use `UpdateWorkspaceSettingsGlobals$inboundSchema` instead. */
  export const inboundSchema = UpdateWorkspaceSettingsGlobals$inboundSchema;
  /** @deprecated use `UpdateWorkspaceSettingsGlobals$outboundSchema` instead. */
  export const outboundSchema = UpdateWorkspaceSettingsGlobals$outboundSchema;
  /** @deprecated use `UpdateWorkspaceSettingsGlobals$Outbound` instead. */
  export type Outbound = UpdateWorkspaceSettingsGlobals$Outbound;
}

export function updateWorkspaceSettingsGlobalsToJSON(
  updateWorkspaceSettingsGlobals: UpdateWorkspaceSettingsGlobals,
): string {
  return JSON.stringify(
    UpdateWorkspaceSettingsGlobals$outboundSchema.parse(
      updateWorkspaceSettingsGlobals,
    ),
  );
}

export function updateWorkspaceSettingsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<UpdateWorkspaceSettingsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateWorkspaceSettingsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateWorkspaceSettingsGlobals' from JSON`,
  );
}

/** @internal */
export const UpdateWorkspaceSettingsRequest$inboundSchema: z.ZodType<
  UpdateWorkspaceSettingsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string().optional(),
  WorkspaceSettings: shared.WorkspaceSettings$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "WorkspaceSettings": "workspaceSettings",
  });
});

/** @internal */
export type UpdateWorkspaceSettingsRequest$Outbound = {
  workspace_id?: string | undefined;
  WorkspaceSettings: shared.WorkspaceSettings$Outbound;
};

/** @internal */
export const UpdateWorkspaceSettingsRequest$outboundSchema: z.ZodType<
  UpdateWorkspaceSettingsRequest$Outbound,
  z.ZodTypeDef,
  UpdateWorkspaceSettingsRequest
> = z.object({
  workspaceId: z.string().optional(),
  workspaceSettings: shared.WorkspaceSettings$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    workspaceSettings: "WorkspaceSettings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWorkspaceSettingsRequest$ {
  /** @deprecated use `UpdateWorkspaceSettingsRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateWorkspaceSettingsRequest$inboundSchema;
  /** @deprecated use `UpdateWorkspaceSettingsRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateWorkspaceSettingsRequest$outboundSchema;
  /** @deprecated use `UpdateWorkspaceSettingsRequest$Outbound` instead. */
  export type Outbound = UpdateWorkspaceSettingsRequest$Outbound;
}

export function updateWorkspaceSettingsRequestToJSON(
  updateWorkspaceSettingsRequest: UpdateWorkspaceSettingsRequest,
): string {
  return JSON.stringify(
    UpdateWorkspaceSettingsRequest$outboundSchema.parse(
      updateWorkspaceSettingsRequest,
    ),
  );
}

export function updateWorkspaceSettingsRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateWorkspaceSettingsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateWorkspaceSettingsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateWorkspaceSettingsRequest' from JSON`,
  );
}
