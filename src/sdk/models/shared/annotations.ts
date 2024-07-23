/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * Annotations
 */
export type Annotations = {
    /**
     * The authors of the image
     */
    orgOpencontainersImageAuthors?: string | undefined;
    /**
     * The time the image was created
     */
    orgOpencontainersImageCreated?: string | undefined;
    /**
     * Human-readable description of the software packaged in the image
     */
    orgOpencontainersImageDescription?: string | undefined;
    /**
     * The documentation URL of the image
     */
    orgOpencontainersImageDocumentation?: string | undefined;
    orgOpencontainersImageLicenses?: string | undefined;
    /**
     * Name of the reference for a target
     */
    orgOpencontainersImageRefName?: string | undefined;
    /**
     * Source control revision identifier
     */
    orgOpencontainersImageRevision?: string | undefined;
    /**
     * The URL to get source code for building the image
     */
    orgOpencontainersImageSource?: string | undefined;
    /**
     * Human-readable title of the image
     */
    orgOpencontainersImageTitle?: string | undefined;
    /**
     * The URL of the image
     */
    orgOpencontainersImageUrl?: string | undefined;
    /**
     * Name of the distributing entity, organization or individual.
     */
    orgOpencontainersImageVendor?: string | undefined;
    /**
     * The version of the packaged software
     */
    orgOpencontainersImageVersion?: string | undefined;
};

/** @internal */
export const Annotations$inboundSchema: z.ZodType<Annotations, z.ZodTypeDef, unknown> = z
    .object({
        "org.opencontainers.image.authors": z.string().optional(),
        "org.opencontainers.image.created": z.string().optional(),
        "org.opencontainers.image.description": z.string().optional(),
        "org.opencontainers.image.documentation": z.string().optional(),
        "org.opencontainers.image.licenses": z.string().optional(),
        "org.opencontainers.image.ref.name": z.string().optional(),
        "org.opencontainers.image.revision": z.string().optional(),
        "org.opencontainers.image.source": z.string().optional(),
        "org.opencontainers.image.title": z.string().optional(),
        "org.opencontainers.image.url": z.string().optional(),
        "org.opencontainers.image.vendor": z.string().optional(),
        "org.opencontainers.image.version": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "org.opencontainers.image.authors": "orgOpencontainersImageAuthors",
            "org.opencontainers.image.created": "orgOpencontainersImageCreated",
            "org.opencontainers.image.description": "orgOpencontainersImageDescription",
            "org.opencontainers.image.documentation": "orgOpencontainersImageDocumentation",
            "org.opencontainers.image.licenses": "orgOpencontainersImageLicenses",
            "org.opencontainers.image.ref.name": "orgOpencontainersImageRefName",
            "org.opencontainers.image.revision": "orgOpencontainersImageRevision",
            "org.opencontainers.image.source": "orgOpencontainersImageSource",
            "org.opencontainers.image.title": "orgOpencontainersImageTitle",
            "org.opencontainers.image.url": "orgOpencontainersImageUrl",
            "org.opencontainers.image.vendor": "orgOpencontainersImageVendor",
            "org.opencontainers.image.version": "orgOpencontainersImageVersion",
        });
    });

/** @internal */
export type Annotations$Outbound = {
    "org.opencontainers.image.authors"?: string | undefined;
    "org.opencontainers.image.created"?: string | undefined;
    "org.opencontainers.image.description"?: string | undefined;
    "org.opencontainers.image.documentation"?: string | undefined;
    "org.opencontainers.image.licenses"?: string | undefined;
    "org.opencontainers.image.ref.name"?: string | undefined;
    "org.opencontainers.image.revision"?: string | undefined;
    "org.opencontainers.image.source"?: string | undefined;
    "org.opencontainers.image.title"?: string | undefined;
    "org.opencontainers.image.url"?: string | undefined;
    "org.opencontainers.image.vendor"?: string | undefined;
    "org.opencontainers.image.version"?: string | undefined;
};

/** @internal */
export const Annotations$outboundSchema: z.ZodType<
    Annotations$Outbound,
    z.ZodTypeDef,
    Annotations
> = z
    .object({
        orgOpencontainersImageAuthors: z.string().optional(),
        orgOpencontainersImageCreated: z.string().optional(),
        orgOpencontainersImageDescription: z.string().optional(),
        orgOpencontainersImageDocumentation: z.string().optional(),
        orgOpencontainersImageLicenses: z.string().optional(),
        orgOpencontainersImageRefName: z.string().optional(),
        orgOpencontainersImageRevision: z.string().optional(),
        orgOpencontainersImageSource: z.string().optional(),
        orgOpencontainersImageTitle: z.string().optional(),
        orgOpencontainersImageUrl: z.string().optional(),
        orgOpencontainersImageVendor: z.string().optional(),
        orgOpencontainersImageVersion: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            orgOpencontainersImageAuthors: "org.opencontainers.image.authors",
            orgOpencontainersImageCreated: "org.opencontainers.image.created",
            orgOpencontainersImageDescription: "org.opencontainers.image.description",
            orgOpencontainersImageDocumentation: "org.opencontainers.image.documentation",
            orgOpencontainersImageLicenses: "org.opencontainers.image.licenses",
            orgOpencontainersImageRefName: "org.opencontainers.image.ref.name",
            orgOpencontainersImageRevision: "org.opencontainers.image.revision",
            orgOpencontainersImageSource: "org.opencontainers.image.source",
            orgOpencontainersImageTitle: "org.opencontainers.image.title",
            orgOpencontainersImageUrl: "org.opencontainers.image.url",
            orgOpencontainersImageVendor: "org.opencontainers.image.vendor",
            orgOpencontainersImageVersion: "org.opencontainers.image.version",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Annotations$ {
    /** @deprecated use `Annotations$inboundSchema` instead. */
    export const inboundSchema = Annotations$inboundSchema;
    /** @deprecated use `Annotations$outboundSchema` instead. */
    export const outboundSchema = Annotations$outboundSchema;
    /** @deprecated use `Annotations$Outbound` instead. */
    export type Outbound = Annotations$Outbound;
}
