/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteVersionMetadataRequest = {
    /**
     * The ID of the Api to delete metadata for.
     */
    apiID: string;
    /**
     * The version ID of the Api to delete metadata for.
     */
    versionID: string;
    /**
     * The key of the metadata to delete.
     */
    metaKey: string;
    /**
     * The value of the metadata to delete.
     */
    metaValue: string;
};

/** @internal */
export const DeleteVersionMetadataRequest$inboundSchema: z.ZodType<
    DeleteVersionMetadataRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
    metaKey: z.string(),
    metaValue: z.string(),
});

/** @internal */
export type DeleteVersionMetadataRequest$Outbound = {
    apiID: string;
    versionID: string;
    metaKey: string;
    metaValue: string;
};

/** @internal */
export const DeleteVersionMetadataRequest$outboundSchema: z.ZodType<
    DeleteVersionMetadataRequest$Outbound,
    z.ZodTypeDef,
    DeleteVersionMetadataRequest
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
    metaKey: z.string(),
    metaValue: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteVersionMetadataRequest$ {
    /** @deprecated use `DeleteVersionMetadataRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteVersionMetadataRequest$inboundSchema;
    /** @deprecated use `DeleteVersionMetadataRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteVersionMetadataRequest$outboundSchema;
    /** @deprecated use `DeleteVersionMetadataRequest$Outbound` instead. */
    export type Outbound = DeleteVersionMetadataRequest$Outbound;
}
