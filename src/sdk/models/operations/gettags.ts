/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetTagsRequest = {
    namespaceName: string;
};

export type GetTagsResponse = shared.GetTagsResponse | shared.ErrorT;

/** @internal */
export const GetTagsRequest$inboundSchema: z.ZodType<GetTagsRequest, z.ZodTypeDef, unknown> = z
    .object({
        namespace_name: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            namespace_name: "namespaceName",
        });
    });

/** @internal */
export type GetTagsRequest$Outbound = {
    namespace_name: string;
};

/** @internal */
export const GetTagsRequest$outboundSchema: z.ZodType<
    GetTagsRequest$Outbound,
    z.ZodTypeDef,
    GetTagsRequest
> = z
    .object({
        namespaceName: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            namespaceName: "namespace_name",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTagsRequest$ {
    /** @deprecated use `GetTagsRequest$inboundSchema` instead. */
    export const inboundSchema = GetTagsRequest$inboundSchema;
    /** @deprecated use `GetTagsRequest$outboundSchema` instead. */
    export const outboundSchema = GetTagsRequest$outboundSchema;
    /** @deprecated use `GetTagsRequest$Outbound` instead. */
    export type Outbound = GetTagsRequest$Outbound;
}

/** @internal */
export const GetTagsResponse$inboundSchema: z.ZodType<GetTagsResponse, z.ZodTypeDef, unknown> =
    z.union([shared.GetTagsResponse$inboundSchema, shared.ErrorT$inboundSchema]);

/** @internal */
export type GetTagsResponse$Outbound = shared.GetTagsResponse$Outbound | shared.ErrorT$Outbound;

/** @internal */
export const GetTagsResponse$outboundSchema: z.ZodType<
    GetTagsResponse$Outbound,
    z.ZodTypeDef,
    GetTagsResponse
> = z.union([shared.GetTagsResponse$outboundSchema, shared.ErrorT$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTagsResponse$ {
    /** @deprecated use `GetTagsResponse$inboundSchema` instead. */
    export const inboundSchema = GetTagsResponse$inboundSchema;
    /** @deprecated use `GetTagsResponse$outboundSchema` instead. */
    export const outboundSchema = GetTagsResponse$outboundSchema;
    /** @deprecated use `GetTagsResponse$Outbound` instead. */
    export type Outbound = GetTagsResponse$Outbound;
}
