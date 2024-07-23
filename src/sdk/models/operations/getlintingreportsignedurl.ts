/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetLintingReportSignedUrlRequest = {
    /**
     * The checksum of the document to retrieve the signed access url for.
     */
    documentChecksum: string;
};

/**
 * OK
 */
export type GetLintingReportSignedUrlSignedAccess = {
    url: string;
};

/** @internal */
export const GetLintingReportSignedUrlRequest$inboundSchema: z.ZodType<
    GetLintingReportSignedUrlRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    documentChecksum: z.string(),
});

/** @internal */
export type GetLintingReportSignedUrlRequest$Outbound = {
    documentChecksum: string;
};

/** @internal */
export const GetLintingReportSignedUrlRequest$outboundSchema: z.ZodType<
    GetLintingReportSignedUrlRequest$Outbound,
    z.ZodTypeDef,
    GetLintingReportSignedUrlRequest
> = z.object({
    documentChecksum: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLintingReportSignedUrlRequest$ {
    /** @deprecated use `GetLintingReportSignedUrlRequest$inboundSchema` instead. */
    export const inboundSchema = GetLintingReportSignedUrlRequest$inboundSchema;
    /** @deprecated use `GetLintingReportSignedUrlRequest$outboundSchema` instead. */
    export const outboundSchema = GetLintingReportSignedUrlRequest$outboundSchema;
    /** @deprecated use `GetLintingReportSignedUrlRequest$Outbound` instead. */
    export type Outbound = GetLintingReportSignedUrlRequest$Outbound;
}

/** @internal */
export const GetLintingReportSignedUrlSignedAccess$inboundSchema: z.ZodType<
    GetLintingReportSignedUrlSignedAccess,
    z.ZodTypeDef,
    unknown
> = z.object({
    url: z.string(),
});

/** @internal */
export type GetLintingReportSignedUrlSignedAccess$Outbound = {
    url: string;
};

/** @internal */
export const GetLintingReportSignedUrlSignedAccess$outboundSchema: z.ZodType<
    GetLintingReportSignedUrlSignedAccess$Outbound,
    z.ZodTypeDef,
    GetLintingReportSignedUrlSignedAccess
> = z.object({
    url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLintingReportSignedUrlSignedAccess$ {
    /** @deprecated use `GetLintingReportSignedUrlSignedAccess$inboundSchema` instead. */
    export const inboundSchema = GetLintingReportSignedUrlSignedAccess$inboundSchema;
    /** @deprecated use `GetLintingReportSignedUrlSignedAccess$outboundSchema` instead. */
    export const outboundSchema = GetLintingReportSignedUrlSignedAccess$outboundSchema;
    /** @deprecated use `GetLintingReportSignedUrlSignedAccess$Outbound` instead. */
    export type Outbound = GetLintingReportSignedUrlSignedAccess$Outbound;
}
