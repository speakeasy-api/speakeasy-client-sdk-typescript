/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetAllForVersionApiEndpointsRequest = {
    /**
     * The ID of the Api to retrieve ApiEndpoints for.
     */
    apiID: string;
    /**
     * The version ID of the Api to retrieve ApiEndpoints for.
     */
    versionID: string;
};

export type GetAllForVersionApiEndpointsResponse = shared.ErrorT | Array<shared.ApiEndpoint>;

/** @internal */
export const GetAllForVersionApiEndpointsRequest$inboundSchema: z.ZodType<
    GetAllForVersionApiEndpointsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
});

/** @internal */
export type GetAllForVersionApiEndpointsRequest$Outbound = {
    apiID: string;
    versionID: string;
};

/** @internal */
export const GetAllForVersionApiEndpointsRequest$outboundSchema: z.ZodType<
    GetAllForVersionApiEndpointsRequest$Outbound,
    z.ZodTypeDef,
    GetAllForVersionApiEndpointsRequest
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllForVersionApiEndpointsRequest$ {
    /** @deprecated use `GetAllForVersionApiEndpointsRequest$inboundSchema` instead. */
    export const inboundSchema = GetAllForVersionApiEndpointsRequest$inboundSchema;
    /** @deprecated use `GetAllForVersionApiEndpointsRequest$outboundSchema` instead. */
    export const outboundSchema = GetAllForVersionApiEndpointsRequest$outboundSchema;
    /** @deprecated use `GetAllForVersionApiEndpointsRequest$Outbound` instead. */
    export type Outbound = GetAllForVersionApiEndpointsRequest$Outbound;
}

/** @internal */
export const GetAllForVersionApiEndpointsResponse$inboundSchema: z.ZodType<
    GetAllForVersionApiEndpointsResponse,
    z.ZodTypeDef,
    unknown
> = z.union([shared.ErrorT$inboundSchema, z.array(shared.ApiEndpoint$inboundSchema)]);

/** @internal */
export type GetAllForVersionApiEndpointsResponse$Outbound =
    | shared.ErrorT$Outbound
    | Array<shared.ApiEndpoint$Outbound>;

/** @internal */
export const GetAllForVersionApiEndpointsResponse$outboundSchema: z.ZodType<
    GetAllForVersionApiEndpointsResponse$Outbound,
    z.ZodTypeDef,
    GetAllForVersionApiEndpointsResponse
> = z.union([shared.ErrorT$outboundSchema, z.array(shared.ApiEndpoint$outboundSchema)]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllForVersionApiEndpointsResponse$ {
    /** @deprecated use `GetAllForVersionApiEndpointsResponse$inboundSchema` instead. */
    export const inboundSchema = GetAllForVersionApiEndpointsResponse$inboundSchema;
    /** @deprecated use `GetAllForVersionApiEndpointsResponse$outboundSchema` instead. */
    export const outboundSchema = GetAllForVersionApiEndpointsResponse$outboundSchema;
    /** @deprecated use `GetAllForVersionApiEndpointsResponse$Outbound` instead. */
    export type Outbound = GetAllForVersionApiEndpointsResponse$Outbound;
}
