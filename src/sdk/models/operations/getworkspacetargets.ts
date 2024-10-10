/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetWorkspaceTargetsRequest = {
  /**
   * Filter to only return targets with events created after this timestamp
   */
  afterLastEventCreatedAt?: Date | undefined;
};

export type GetWorkspaceTargetsResponse =
  | shared.ErrorT
  | Array<shared.TargetSDK>;

/** @internal */
export const GetWorkspaceTargetsRequest$inboundSchema: z.ZodType<
  GetWorkspaceTargetsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  after_last_event_created_at: z.string().datetime({ offset: true }).transform(
    v => new Date(v)
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "after_last_event_created_at": "afterLastEventCreatedAt",
  });
});

/** @internal */
export type GetWorkspaceTargetsRequest$Outbound = {
  after_last_event_created_at?: string | undefined;
};

/** @internal */
export const GetWorkspaceTargetsRequest$outboundSchema: z.ZodType<
  GetWorkspaceTargetsRequest$Outbound,
  z.ZodTypeDef,
  GetWorkspaceTargetsRequest
> = z.object({
  afterLastEventCreatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    afterLastEventCreatedAt: "after_last_event_created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceTargetsRequest$ {
  /** @deprecated use `GetWorkspaceTargetsRequest$inboundSchema` instead. */
  export const inboundSchema = GetWorkspaceTargetsRequest$inboundSchema;
  /** @deprecated use `GetWorkspaceTargetsRequest$outboundSchema` instead. */
  export const outboundSchema = GetWorkspaceTargetsRequest$outboundSchema;
  /** @deprecated use `GetWorkspaceTargetsRequest$Outbound` instead. */
  export type Outbound = GetWorkspaceTargetsRequest$Outbound;
}

/** @internal */
export const GetWorkspaceTargetsResponse$inboundSchema: z.ZodType<
  GetWorkspaceTargetsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.ErrorT$inboundSchema,
  z.array(shared.TargetSDK$inboundSchema),
]);

/** @internal */
export type GetWorkspaceTargetsResponse$Outbound =
  | shared.ErrorT$Outbound
  | Array<shared.TargetSDK$Outbound>;

/** @internal */
export const GetWorkspaceTargetsResponse$outboundSchema: z.ZodType<
  GetWorkspaceTargetsResponse$Outbound,
  z.ZodTypeDef,
  GetWorkspaceTargetsResponse
> = z.union([
  shared.ErrorT$outboundSchema,
  z.array(shared.TargetSDK$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceTargetsResponse$ {
  /** @deprecated use `GetWorkspaceTargetsResponse$inboundSchema` instead. */
  export const inboundSchema = GetWorkspaceTargetsResponse$inboundSchema;
  /** @deprecated use `GetWorkspaceTargetsResponse$outboundSchema` instead. */
  export const outboundSchema = GetWorkspaceTargetsResponse$outboundSchema;
  /** @deprecated use `GetWorkspaceTargetsResponse$Outbound` instead. */
  export type Outbound = GetWorkspaceTargetsResponse$Outbound;
}
