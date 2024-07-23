/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpsertApiEndpointRequest = {
    /**
     * The ID of the Api the ApiEndpoint belongs to.
     */
    apiID: string;
    /**
     * The version ID of the Api the ApiEndpoint belongs to.
     */
    versionID: string;
    /**
     * The ID of the ApiEndpoint to upsert.
     */
    apiEndpointID: string;
    /**
     * A JSON representation of the ApiEndpoint to upsert.
     */
    apiEndpoint: shared.ApiEndpointInput;
};

export type UpsertApiEndpointResponse = shared.ErrorT | shared.ApiEndpoint;

/** @internal */
export const UpsertApiEndpointRequest$inboundSchema: z.ZodType<
    UpsertApiEndpointRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        apiID: z.string(),
        versionID: z.string(),
        apiEndpointID: z.string(),
        ApiEndpoint: shared.ApiEndpointInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            ApiEndpoint: "apiEndpoint",
        });
    });

/** @internal */
export type UpsertApiEndpointRequest$Outbound = {
    apiID: string;
    versionID: string;
    apiEndpointID: string;
    ApiEndpoint: shared.ApiEndpointInput$Outbound;
};

/** @internal */
export const UpsertApiEndpointRequest$outboundSchema: z.ZodType<
    UpsertApiEndpointRequest$Outbound,
    z.ZodTypeDef,
    UpsertApiEndpointRequest
> = z
    .object({
        apiID: z.string(),
        versionID: z.string(),
        apiEndpointID: z.string(),
        apiEndpoint: shared.ApiEndpointInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            apiEndpoint: "ApiEndpoint",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertApiEndpointRequest$ {
    /** @deprecated use `UpsertApiEndpointRequest$inboundSchema` instead. */
    export const inboundSchema = UpsertApiEndpointRequest$inboundSchema;
    /** @deprecated use `UpsertApiEndpointRequest$outboundSchema` instead. */
    export const outboundSchema = UpsertApiEndpointRequest$outboundSchema;
    /** @deprecated use `UpsertApiEndpointRequest$Outbound` instead. */
    export type Outbound = UpsertApiEndpointRequest$Outbound;
}

/** @internal */
export const UpsertApiEndpointResponse$inboundSchema: z.ZodType<
    UpsertApiEndpointResponse,
    z.ZodTypeDef,
    unknown
> = z.union([shared.ErrorT$inboundSchema, shared.ApiEndpoint$inboundSchema]);

/** @internal */
export type UpsertApiEndpointResponse$Outbound =
    | shared.ErrorT$Outbound
    | shared.ApiEndpoint$Outbound;

/** @internal */
export const UpsertApiEndpointResponse$outboundSchema: z.ZodType<
    UpsertApiEndpointResponse$Outbound,
    z.ZodTypeDef,
    UpsertApiEndpointResponse
> = z.union([shared.ErrorT$outboundSchema, shared.ApiEndpoint$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertApiEndpointResponse$ {
    /** @deprecated use `UpsertApiEndpointResponse$inboundSchema` instead. */
    export const inboundSchema = UpsertApiEndpointResponse$inboundSchema;
    /** @deprecated use `UpsertApiEndpointResponse$outboundSchema` instead. */
    export const outboundSchema = UpsertApiEndpointResponse$outboundSchema;
    /** @deprecated use `UpsertApiEndpointResponse$Outbound` instead. */
    export type Outbound = UpsertApiEndpointResponse$Outbound;
}
