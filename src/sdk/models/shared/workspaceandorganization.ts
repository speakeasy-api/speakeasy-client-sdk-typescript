/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Organization,
  Organization$inboundSchema,
  Organization$Outbound,
  Organization$outboundSchema,
} from "./organization.js";
import {
  Workspace,
  Workspace$inboundSchema,
  Workspace$Outbound,
  Workspace$outboundSchema,
} from "./workspace.js";

/**
 * A workspace and organization
 */
export type WorkspaceAndOrganization = {
  /**
   * A speakeasy organization
   */
  organization: Organization;
  /**
   * A speakeasy workspace
   */
  workspace: Workspace;
};

/** @internal */
export const WorkspaceAndOrganization$inboundSchema: z.ZodType<
  WorkspaceAndOrganization,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization: Organization$inboundSchema,
  workspace: Workspace$inboundSchema,
});

/** @internal */
export type WorkspaceAndOrganization$Outbound = {
  organization: Organization$Outbound;
  workspace: Workspace$Outbound;
};

/** @internal */
export const WorkspaceAndOrganization$outboundSchema: z.ZodType<
  WorkspaceAndOrganization$Outbound,
  z.ZodTypeDef,
  WorkspaceAndOrganization
> = z.object({
  organization: Organization$outboundSchema,
  workspace: Workspace$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkspaceAndOrganization$ {
  /** @deprecated use `WorkspaceAndOrganization$inboundSchema` instead. */
  export const inboundSchema = WorkspaceAndOrganization$inboundSchema;
  /** @deprecated use `WorkspaceAndOrganization$outboundSchema` instead. */
  export const outboundSchema = WorkspaceAndOrganization$outboundSchema;
  /** @deprecated use `WorkspaceAndOrganization$Outbound` instead. */
  export type Outbound = WorkspaceAndOrganization$Outbound;
}
