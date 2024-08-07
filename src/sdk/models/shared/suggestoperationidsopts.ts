/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const DepthStyle = {
    Original: "original",
    Flat: "flat",
    Nested: "nested",
    Deep: "deep",
} as const;
export type DepthStyle = ClosedEnum<typeof DepthStyle>;

export const Style = {
    Standardize: "standardize",
    Resource: "resource",
} as const;
export type Style = ClosedEnum<typeof Style>;

export type SuggestOperationIDsOpts = {
    depthStyle?: DepthStyle | undefined;
    style?: Style | undefined;
};

/** @internal */
export const DepthStyle$inboundSchema: z.ZodNativeEnum<typeof DepthStyle> =
    z.nativeEnum(DepthStyle);

/** @internal */
export const DepthStyle$outboundSchema: z.ZodNativeEnum<typeof DepthStyle> =
    DepthStyle$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DepthStyle$ {
    /** @deprecated use `DepthStyle$inboundSchema` instead. */
    export const inboundSchema = DepthStyle$inboundSchema;
    /** @deprecated use `DepthStyle$outboundSchema` instead. */
    export const outboundSchema = DepthStyle$outboundSchema;
}

/** @internal */
export const Style$inboundSchema: z.ZodNativeEnum<typeof Style> = z.nativeEnum(Style);

/** @internal */
export const Style$outboundSchema: z.ZodNativeEnum<typeof Style> = Style$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Style$ {
    /** @deprecated use `Style$inboundSchema` instead. */
    export const inboundSchema = Style$inboundSchema;
    /** @deprecated use `Style$outboundSchema` instead. */
    export const outboundSchema = Style$outboundSchema;
}

/** @internal */
export const SuggestOperationIDsOpts$inboundSchema: z.ZodType<
    SuggestOperationIDsOpts,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        depth_style: DepthStyle$inboundSchema.optional(),
        style: Style$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            depth_style: "depthStyle",
        });
    });

/** @internal */
export type SuggestOperationIDsOpts$Outbound = {
    depth_style?: string | undefined;
    style?: string | undefined;
};

/** @internal */
export const SuggestOperationIDsOpts$outboundSchema: z.ZodType<
    SuggestOperationIDsOpts$Outbound,
    z.ZodTypeDef,
    SuggestOperationIDsOpts
> = z
    .object({
        depthStyle: DepthStyle$outboundSchema.optional(),
        style: Style$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            depthStyle: "depth_style",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SuggestOperationIDsOpts$ {
    /** @deprecated use `SuggestOperationIDsOpts$inboundSchema` instead. */
    export const inboundSchema = SuggestOperationIDsOpts$inboundSchema;
    /** @deprecated use `SuggestOperationIDsOpts$outboundSchema` instead. */
    export const outboundSchema = SuggestOperationIDsOpts$outboundSchema;
    /** @deprecated use `SuggestOperationIDsOpts$Outbound` instead. */
    export type Outbound = SuggestOperationIDsOpts$Outbound;
}
