/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetUserResponse = shared.ErrorT | shared.User;

/** @internal */
export const GetUserResponse$inboundSchema: z.ZodType<GetUserResponse, z.ZodTypeDef, unknown> =
    z.union([shared.ErrorT$inboundSchema, shared.User$inboundSchema]);

/** @internal */
export type GetUserResponse$Outbound = shared.ErrorT$Outbound | shared.User$Outbound;

/** @internal */
export const GetUserResponse$outboundSchema: z.ZodType<
    GetUserResponse$Outbound,
    z.ZodTypeDef,
    GetUserResponse
> = z.union([shared.ErrorT$outboundSchema, shared.User$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUserResponse$ {
    /** @deprecated use `GetUserResponse$inboundSchema` instead. */
    export const inboundSchema = GetUserResponse$inboundSchema;
    /** @deprecated use `GetUserResponse$outboundSchema` instead. */
    export const outboundSchema = GetUserResponse$outboundSchema;
    /** @deprecated use `GetUserResponse$Outbound` instead. */
    export type Outbound = GetUserResponse$Outbound;
}
