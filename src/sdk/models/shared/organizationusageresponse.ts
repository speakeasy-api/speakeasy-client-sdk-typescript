/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import {
    OrganizationUsage,
    OrganizationUsage$inboundSchema,
    OrganizationUsage$Outbound,
    OrganizationUsage$outboundSchema,
} from "./organizationusage.js";
import * as z from "zod";

/**
 * A billing summary of organization usage
 */
export type OrganizationUsageResponse = {
    /**
     * List of allowed languages
     */
    allowedLanguages: Array<string>;
    /**
     * Expiry date of the free trial, will be null if no trial
     */
    freeTrialExpiry?: Date | undefined;
    /**
     * Total number of allowed languages, -1 if unlimited
     */
    totalAllowedLanguages: number;
    usage: Array<OrganizationUsage>;
};

/** @internal */
export const OrganizationUsageResponse$inboundSchema: z.ZodType<
    OrganizationUsageResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        allowed_languages: z.array(z.string()),
        free_trial_expiry: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        total_allowed_languages: z.number().int(),
        usage: z.array(OrganizationUsage$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            allowed_languages: "allowedLanguages",
            free_trial_expiry: "freeTrialExpiry",
            total_allowed_languages: "totalAllowedLanguages",
        });
    });

/** @internal */
export type OrganizationUsageResponse$Outbound = {
    allowed_languages: Array<string>;
    free_trial_expiry?: string | undefined;
    total_allowed_languages: number;
    usage: Array<OrganizationUsage$Outbound>;
};

/** @internal */
export const OrganizationUsageResponse$outboundSchema: z.ZodType<
    OrganizationUsageResponse$Outbound,
    z.ZodTypeDef,
    OrganizationUsageResponse
> = z
    .object({
        allowedLanguages: z.array(z.string()),
        freeTrialExpiry: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        totalAllowedLanguages: z.number().int(),
        usage: z.array(OrganizationUsage$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            allowedLanguages: "allowed_languages",
            freeTrialExpiry: "free_trial_expiry",
            totalAllowedLanguages: "total_allowed_languages",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrganizationUsageResponse$ {
    /** @deprecated use `OrganizationUsageResponse$inboundSchema` instead. */
    export const inboundSchema = OrganizationUsageResponse$inboundSchema;
    /** @deprecated use `OrganizationUsageResponse$outboundSchema` instead. */
    export const outboundSchema = OrganizationUsageResponse$outboundSchema;
    /** @deprecated use `OrganizationUsageResponse$Outbound` instead. */
    export type Outbound = OrganizationUsageResponse$Outbound;
}
