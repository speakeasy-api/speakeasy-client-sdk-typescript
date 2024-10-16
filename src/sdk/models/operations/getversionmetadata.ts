/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GetVersionMetadataRequest = {
  /**
   * The ID of the Api to retrieve metadata for.
   */
  apiID: string;
  /**
   * The version ID of the Api to retrieve metadata for.
   */
  versionID: string;
};

export type GetVersionMetadataResponse =
  | shared.ErrorT
  | Array<shared.VersionMetadata>;

/** @internal */
export const GetVersionMetadataRequest$inboundSchema: z.ZodType<
  GetVersionMetadataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
});

/** @internal */
export type GetVersionMetadataRequest$Outbound = {
  apiID: string;
  versionID: string;
};

/** @internal */
export const GetVersionMetadataRequest$outboundSchema: z.ZodType<
  GetVersionMetadataRequest$Outbound,
  z.ZodTypeDef,
  GetVersionMetadataRequest
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVersionMetadataRequest$ {
  /** @deprecated use `GetVersionMetadataRequest$inboundSchema` instead. */
  export const inboundSchema = GetVersionMetadataRequest$inboundSchema;
  /** @deprecated use `GetVersionMetadataRequest$outboundSchema` instead. */
  export const outboundSchema = GetVersionMetadataRequest$outboundSchema;
  /** @deprecated use `GetVersionMetadataRequest$Outbound` instead. */
  export type Outbound = GetVersionMetadataRequest$Outbound;
}

/** @internal */
export const GetVersionMetadataResponse$inboundSchema: z.ZodType<
  GetVersionMetadataResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.ErrorT$inboundSchema,
  z.array(shared.VersionMetadata$inboundSchema),
]);

/** @internal */
export type GetVersionMetadataResponse$Outbound =
  | shared.ErrorT$Outbound
  | Array<shared.VersionMetadata$Outbound>;

/** @internal */
export const GetVersionMetadataResponse$outboundSchema: z.ZodType<
  GetVersionMetadataResponse$Outbound,
  z.ZodTypeDef,
  GetVersionMetadataResponse
> = z.union([
  shared.ErrorT$outboundSchema,
  z.array(shared.VersionMetadata$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVersionMetadataResponse$ {
  /** @deprecated use `GetVersionMetadataResponse$inboundSchema` instead. */
  export const inboundSchema = GetVersionMetadataResponse$inboundSchema;
  /** @deprecated use `GetVersionMetadataResponse$outboundSchema` instead. */
  export const outboundSchema = GetVersionMetadataResponse$outboundSchema;
  /** @deprecated use `GetVersionMetadataResponse$Outbound` instead. */
  export type Outbound = GetVersionMetadataResponse$Outbound;
}
