/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * A request to trigger an action on a GitHub target
 */
export type GithubTriggerActionRequest = {
    /**
     * The generation lock ID
     */
    genLockId: string;
    /**
     * The GitHub organization name
     */
    org: string;
    /**
     * The GitHub repository name
     */
    repoName: string;
    /**
     * A version to override the SDK too in workflow dispatch
     */
    setVersion?: string | undefined;
    /**
     * The target name for the action
     */
    targetName?: string | undefined;
};

/** @internal */
export const GithubTriggerActionRequest$inboundSchema: z.ZodType<
    GithubTriggerActionRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        gen_lock_id: z.string(),
        org: z.string(),
        repo_name: z.string(),
        set_version: z.string().optional(),
        target_name: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            gen_lock_id: "genLockId",
            repo_name: "repoName",
            set_version: "setVersion",
            target_name: "targetName",
        });
    });

/** @internal */
export type GithubTriggerActionRequest$Outbound = {
    gen_lock_id: string;
    org: string;
    repo_name: string;
    set_version?: string | undefined;
    target_name?: string | undefined;
};

/** @internal */
export const GithubTriggerActionRequest$outboundSchema: z.ZodType<
    GithubTriggerActionRequest$Outbound,
    z.ZodTypeDef,
    GithubTriggerActionRequest
> = z
    .object({
        genLockId: z.string(),
        org: z.string(),
        repoName: z.string(),
        setVersion: z.string().optional(),
        targetName: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            genLockId: "gen_lock_id",
            repoName: "repo_name",
            setVersion: "set_version",
            targetName: "target_name",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubTriggerActionRequest$ {
    /** @deprecated use `GithubTriggerActionRequest$inboundSchema` instead. */
    export const inboundSchema = GithubTriggerActionRequest$inboundSchema;
    /** @deprecated use `GithubTriggerActionRequest$outboundSchema` instead. */
    export const outboundSchema = GithubTriggerActionRequest$outboundSchema;
    /** @deprecated use `GithubTriggerActionRequest$Outbound` instead. */
    export type Outbound = GithubTriggerActionRequest$Outbound;
}
