/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetWorkspaceGlobals = {
    workspaceID?: string | undefined;
};

export type GetWorkspaceRequest = {
    /**
     * Unique identifier of the workspace.
     */
    workspaceID?: string | undefined;
};

export type GetWorkspaceResponse = shared.ErrorT | shared.Workspace;

/** @internal */
export const GetWorkspaceGlobals$inboundSchema: z.ZodType<
    GetWorkspaceGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceID: z.string().optional(),
});

/** @internal */
export type GetWorkspaceGlobals$Outbound = {
    workspaceID?: string | undefined;
};

/** @internal */
export const GetWorkspaceGlobals$outboundSchema: z.ZodType<
    GetWorkspaceGlobals$Outbound,
    z.ZodTypeDef,
    GetWorkspaceGlobals
> = z.object({
    workspaceID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceGlobals$ {
    /** @deprecated use `GetWorkspaceGlobals$inboundSchema` instead. */
    export const inboundSchema = GetWorkspaceGlobals$inboundSchema;
    /** @deprecated use `GetWorkspaceGlobals$outboundSchema` instead. */
    export const outboundSchema = GetWorkspaceGlobals$outboundSchema;
    /** @deprecated use `GetWorkspaceGlobals$Outbound` instead. */
    export type Outbound = GetWorkspaceGlobals$Outbound;
}

/** @internal */
export const GetWorkspaceRequest$inboundSchema: z.ZodType<
    GetWorkspaceRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    workspaceID: z.string().optional(),
});

/** @internal */
export type GetWorkspaceRequest$Outbound = {
    workspaceID?: string | undefined;
};

/** @internal */
export const GetWorkspaceRequest$outboundSchema: z.ZodType<
    GetWorkspaceRequest$Outbound,
    z.ZodTypeDef,
    GetWorkspaceRequest
> = z.object({
    workspaceID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceRequest$ {
    /** @deprecated use `GetWorkspaceRequest$inboundSchema` instead. */
    export const inboundSchema = GetWorkspaceRequest$inboundSchema;
    /** @deprecated use `GetWorkspaceRequest$outboundSchema` instead. */
    export const outboundSchema = GetWorkspaceRequest$outboundSchema;
    /** @deprecated use `GetWorkspaceRequest$Outbound` instead. */
    export type Outbound = GetWorkspaceRequest$Outbound;
}

/** @internal */
export const GetWorkspaceResponse$inboundSchema: z.ZodType<
    GetWorkspaceResponse,
    z.ZodTypeDef,
    unknown
> = z.union([shared.ErrorT$inboundSchema, shared.Workspace$inboundSchema]);

/** @internal */
export type GetWorkspaceResponse$Outbound = shared.ErrorT$Outbound | shared.Workspace$Outbound;

/** @internal */
export const GetWorkspaceResponse$outboundSchema: z.ZodType<
    GetWorkspaceResponse$Outbound,
    z.ZodTypeDef,
    GetWorkspaceResponse
> = z.union([shared.ErrorT$outboundSchema, shared.Workspace$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceResponse$ {
    /** @deprecated use `GetWorkspaceResponse$inboundSchema` instead. */
    export const inboundSchema = GetWorkspaceResponse$inboundSchema;
    /** @deprecated use `GetWorkspaceResponse$outboundSchema` instead. */
    export const outboundSchema = GetWorkspaceResponse$outboundSchema;
    /** @deprecated use `GetWorkspaceResponse$Outbound` instead. */
    export type Outbound = GetWorkspaceResponse$Outbound;
}