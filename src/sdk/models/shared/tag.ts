/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type Tag = {
    /**
     * Format {namespace_id}/{tag}
     */
    id: string;
    /**
     * Human readable tag name
     */
    name: string;
    namespaceName: string;
    revisionDigest: string;
};

/** @internal */
export const Tag$inboundSchema: z.ZodType<Tag, z.ZodTypeDef, unknown> = z
    .object({
        id: z.string(),
        name: z.string(),
        namespace_name: z.string(),
        revision_digest: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            namespace_name: "namespaceName",
            revision_digest: "revisionDigest",
        });
    });

/** @internal */
export type Tag$Outbound = {
    id: string;
    name: string;
    namespace_name: string;
    revision_digest: string;
};

/** @internal */
export const Tag$outboundSchema: z.ZodType<Tag$Outbound, z.ZodTypeDef, Tag> = z
    .object({
        id: z.string(),
        name: z.string(),
        namespaceName: z.string(),
        revisionDigest: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            namespaceName: "namespace_name",
            revisionDigest: "revision_digest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Tag$ {
    /** @deprecated use `Tag$inboundSchema` instead. */
    export const inboundSchema = Tag$inboundSchema;
    /** @deprecated use `Tag$outboundSchema` instead. */
    export const outboundSchema = Tag$outboundSchema;
    /** @deprecated use `Tag$Outbound` instead. */
    export type Outbound = Tag$Outbound;
}
