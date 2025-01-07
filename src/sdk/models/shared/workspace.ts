/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

/**
 * A speakeasy workspace
 */
export type Workspace = {
  createdAt: Date;
  id: string;
  inactive?: boolean | undefined;
  name: string;
  organizationId: string;
  slug: string;
  /**
   * Deprecated. Use organization.telemetry_disabled instead.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  telemetryDisabled?: boolean | undefined;
  updatedAt: Date;
  verified: boolean;
};

/** @internal */
export const Workspace$inboundSchema: z.ZodType<
  Workspace,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  id: z.string(),
  inactive: z.boolean().optional(),
  name: z.string(),
  organization_id: z.string(),
  slug: z.string(),
  telemetry_disabled: z.boolean().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  verified: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "organization_id": "organizationId",
    "telemetry_disabled": "telemetryDisabled",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type Workspace$Outbound = {
  created_at: string;
  id: string;
  inactive?: boolean | undefined;
  name: string;
  organization_id: string;
  slug: string;
  telemetry_disabled?: boolean | undefined;
  updated_at: string;
  verified: boolean;
};

/** @internal */
export const Workspace$outboundSchema: z.ZodType<
  Workspace$Outbound,
  z.ZodTypeDef,
  Workspace
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  id: z.string(),
  inactive: z.boolean().optional(),
  name: z.string(),
  organizationId: z.string(),
  slug: z.string(),
  telemetryDisabled: z.boolean().optional(),
  updatedAt: z.date().transform(v => v.toISOString()),
  verified: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    organizationId: "organization_id",
    telemetryDisabled: "telemetry_disabled",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Workspace$ {
  /** @deprecated use `Workspace$inboundSchema` instead. */
  export const inboundSchema = Workspace$inboundSchema;
  /** @deprecated use `Workspace$outboundSchema` instead. */
  export const outboundSchema = Workspace$outboundSchema;
  /** @deprecated use `Workspace$Outbound` instead. */
  export type Outbound = Workspace$Outbound;
}
