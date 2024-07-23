/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteApiEndpointRequest = {
    /**
     * The ID of the Api the ApiEndpoint belongs to.
     */
    apiID: string;
    /**
     * The version ID of the Api the ApiEndpoint belongs to.
     */
    versionID: string;
    /**
     * The ID of the ApiEndpoint to delete.
     */
    apiEndpointID: string;
};

/** @internal */
export const DeleteApiEndpointRequest$inboundSchema: z.ZodType<
    DeleteApiEndpointRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
    apiEndpointID: z.string(),
});

/** @internal */
export type DeleteApiEndpointRequest$Outbound = {
    apiID: string;
    versionID: string;
    apiEndpointID: string;
};

/** @internal */
export const DeleteApiEndpointRequest$outboundSchema: z.ZodType<
    DeleteApiEndpointRequest$Outbound,
    z.ZodTypeDef,
    DeleteApiEndpointRequest
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
    apiEndpointID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteApiEndpointRequest$ {
    /** @deprecated use `DeleteApiEndpointRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteApiEndpointRequest$inboundSchema;
    /** @deprecated use `DeleteApiEndpointRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteApiEndpointRequest$outboundSchema;
    /** @deprecated use `DeleteApiEndpointRequest$Outbound` instead. */
    export type Outbound = DeleteApiEndpointRequest$Outbound;
}
