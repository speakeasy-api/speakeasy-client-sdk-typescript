/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GetSchemaRevisionRequest = {
  /**
   * The ID of the Api to retrieve schemas for.
   */
  apiID: string;
  /**
   * The version ID of the Api to delete metadata for.
   */
  versionID: string;
  /**
   * The revision ID of the schema to retrieve.
   */
  revisionID: string;
};

export type GetSchemaRevisionResponse = shared.ErrorT | shared.Schema;

/** @internal */
export const GetSchemaRevisionRequest$inboundSchema: z.ZodType<
  GetSchemaRevisionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
  revisionID: z.string(),
});

/** @internal */
export type GetSchemaRevisionRequest$Outbound = {
  apiID: string;
  versionID: string;
  revisionID: string;
};

/** @internal */
export const GetSchemaRevisionRequest$outboundSchema: z.ZodType<
  GetSchemaRevisionRequest$Outbound,
  z.ZodTypeDef,
  GetSchemaRevisionRequest
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
  revisionID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSchemaRevisionRequest$ {
  /** @deprecated use `GetSchemaRevisionRequest$inboundSchema` instead. */
  export const inboundSchema = GetSchemaRevisionRequest$inboundSchema;
  /** @deprecated use `GetSchemaRevisionRequest$outboundSchema` instead. */
  export const outboundSchema = GetSchemaRevisionRequest$outboundSchema;
  /** @deprecated use `GetSchemaRevisionRequest$Outbound` instead. */
  export type Outbound = GetSchemaRevisionRequest$Outbound;
}

/** @internal */
export const GetSchemaRevisionResponse$inboundSchema: z.ZodType<
  GetSchemaRevisionResponse,
  z.ZodTypeDef,
  unknown
> = z.union([shared.ErrorT$inboundSchema, shared.Schema$inboundSchema]);

/** @internal */
export type GetSchemaRevisionResponse$Outbound =
  | shared.ErrorT$Outbound
  | shared.Schema$Outbound;

/** @internal */
export const GetSchemaRevisionResponse$outboundSchema: z.ZodType<
  GetSchemaRevisionResponse$Outbound,
  z.ZodTypeDef,
  GetSchemaRevisionResponse
> = z.union([shared.ErrorT$outboundSchema, shared.Schema$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSchemaRevisionResponse$ {
  /** @deprecated use `GetSchemaRevisionResponse$inboundSchema` instead. */
  export const inboundSchema = GetSchemaRevisionResponse$inboundSchema;
  /** @deprecated use `GetSchemaRevisionResponse$outboundSchema` instead. */
  export const outboundSchema = GetSchemaRevisionResponse$outboundSchema;
  /** @deprecated use `GetSchemaRevisionResponse$Outbound` instead. */
  export type Outbound = GetSchemaRevisionResponse$Outbound;
}
