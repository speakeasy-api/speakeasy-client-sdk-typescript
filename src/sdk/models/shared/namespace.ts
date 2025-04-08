/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  RemoteSourceSubscriptionSettings,
  RemoteSourceSubscriptionSettings$inboundSchema,
  RemoteSourceSubscriptionSettings$Outbound,
  RemoteSourceSubscriptionSettings$outboundSchema,
} from "./remotesourcesubscriptionsettings.js";
import {
  RevisionContentsMetadata,
  RevisionContentsMetadata$inboundSchema,
  RevisionContentsMetadata$Outbound,
  RevisionContentsMetadata$outboundSchema,
} from "./revisioncontentsmetadata.js";

export type CompositeSpecMetadata = {
  /**
   * The subscription ID for the remote source subscription, if applicable. This indicates that the namespace is created by a remote source and thus is composite.
   */
  subscriptionId: string;
  subscriptionSettings: RemoteSourceSubscriptionSettings;
};

/**
 * A namespace contains many revisions.
 */
export type Namespace = {
  archivedAt?: Date | undefined;
  compositeSpecMetadata?: CompositeSpecMetadata | undefined;
  createdAt: Date;
  /**
   * {organization_slug}/{workspace_slug}/{namespace_name}
   */
  id: string;
  latestRevisionMetadata?: RevisionContentsMetadata | undefined;
  /**
   * A human-readable name for the namespace.
   */
  name: string;
  /**
   * Indicates whether the namespace is publicly accessible
   */
  public?: boolean | undefined;
  updatedAt: Date;
};

/** @internal */
export const CompositeSpecMetadata$inboundSchema: z.ZodType<
  CompositeSpecMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  subscription_id: z.string(),
  subscription_settings: RemoteSourceSubscriptionSettings$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "subscription_id": "subscriptionId",
    "subscription_settings": "subscriptionSettings",
  });
});

/** @internal */
export type CompositeSpecMetadata$Outbound = {
  subscription_id: string;
  subscription_settings: RemoteSourceSubscriptionSettings$Outbound;
};

/** @internal */
export const CompositeSpecMetadata$outboundSchema: z.ZodType<
  CompositeSpecMetadata$Outbound,
  z.ZodTypeDef,
  CompositeSpecMetadata
> = z.object({
  subscriptionId: z.string(),
  subscriptionSettings: RemoteSourceSubscriptionSettings$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    subscriptionId: "subscription_id",
    subscriptionSettings: "subscription_settings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompositeSpecMetadata$ {
  /** @deprecated use `CompositeSpecMetadata$inboundSchema` instead. */
  export const inboundSchema = CompositeSpecMetadata$inboundSchema;
  /** @deprecated use `CompositeSpecMetadata$outboundSchema` instead. */
  export const outboundSchema = CompositeSpecMetadata$outboundSchema;
  /** @deprecated use `CompositeSpecMetadata$Outbound` instead. */
  export type Outbound = CompositeSpecMetadata$Outbound;
}

export function compositeSpecMetadataToJSON(
  compositeSpecMetadata: CompositeSpecMetadata,
): string {
  return JSON.stringify(
    CompositeSpecMetadata$outboundSchema.parse(compositeSpecMetadata),
  );
}

export function compositeSpecMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CompositeSpecMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompositeSpecMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompositeSpecMetadata' from JSON`,
  );
}

/** @internal */
export const Namespace$inboundSchema: z.ZodType<
  Namespace,
  z.ZodTypeDef,
  unknown
> = z.object({
  archived_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  composite_spec_metadata: z.lazy(() => CompositeSpecMetadata$inboundSchema)
    .optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  id: z.string(),
  latest_revision_metadata: RevisionContentsMetadata$inboundSchema.optional(),
  name: z.string(),
  public: z.boolean().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "archived_at": "archivedAt",
    "composite_spec_metadata": "compositeSpecMetadata",
    "created_at": "createdAt",
    "latest_revision_metadata": "latestRevisionMetadata",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type Namespace$Outbound = {
  archived_at?: string | undefined;
  composite_spec_metadata?: CompositeSpecMetadata$Outbound | undefined;
  created_at: string;
  id: string;
  latest_revision_metadata?: RevisionContentsMetadata$Outbound | undefined;
  name: string;
  public?: boolean | undefined;
  updated_at: string;
};

/** @internal */
export const Namespace$outboundSchema: z.ZodType<
  Namespace$Outbound,
  z.ZodTypeDef,
  Namespace
> = z.object({
  archivedAt: z.date().transform(v => v.toISOString()).optional(),
  compositeSpecMetadata: z.lazy(() => CompositeSpecMetadata$outboundSchema)
    .optional(),
  createdAt: z.date().transform(v => v.toISOString()),
  id: z.string(),
  latestRevisionMetadata: RevisionContentsMetadata$outboundSchema.optional(),
  name: z.string(),
  public: z.boolean().optional(),
  updatedAt: z.date().transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    archivedAt: "archived_at",
    compositeSpecMetadata: "composite_spec_metadata",
    createdAt: "created_at",
    latestRevisionMetadata: "latest_revision_metadata",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Namespace$ {
  /** @deprecated use `Namespace$inboundSchema` instead. */
  export const inboundSchema = Namespace$inboundSchema;
  /** @deprecated use `Namespace$outboundSchema` instead. */
  export const outboundSchema = Namespace$outboundSchema;
  /** @deprecated use `Namespace$Outbound` instead. */
  export type Outbound = Namespace$Outbound;
}

export function namespaceToJSON(namespace: Namespace): string {
  return JSON.stringify(Namespace$outboundSchema.parse(namespace));
}

export function namespaceFromJSON(
  jsonString: string,
): SafeParseResult<Namespace, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Namespace$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Namespace' from JSON`,
  );
}
