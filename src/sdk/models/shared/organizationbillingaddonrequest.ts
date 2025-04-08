/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BillingAddOn,
  BillingAddOn$inboundSchema,
  BillingAddOn$outboundSchema,
} from "./billingaddon.js";

/**
 * A request to add billing add ons
 */
export type OrganizationBillingAddOnRequest = {
  addOns: Array<BillingAddOn>;
};

/** @internal */
export const OrganizationBillingAddOnRequest$inboundSchema: z.ZodType<
  OrganizationBillingAddOnRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  add_ons: z.array(BillingAddOn$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "add_ons": "addOns",
  });
});

/** @internal */
export type OrganizationBillingAddOnRequest$Outbound = {
  add_ons: Array<string>;
};

/** @internal */
export const OrganizationBillingAddOnRequest$outboundSchema: z.ZodType<
  OrganizationBillingAddOnRequest$Outbound,
  z.ZodTypeDef,
  OrganizationBillingAddOnRequest
> = z.object({
  addOns: z.array(BillingAddOn$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    addOns: "add_ons",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrganizationBillingAddOnRequest$ {
  /** @deprecated use `OrganizationBillingAddOnRequest$inboundSchema` instead. */
  export const inboundSchema = OrganizationBillingAddOnRequest$inboundSchema;
  /** @deprecated use `OrganizationBillingAddOnRequest$outboundSchema` instead. */
  export const outboundSchema = OrganizationBillingAddOnRequest$outboundSchema;
  /** @deprecated use `OrganizationBillingAddOnRequest$Outbound` instead. */
  export type Outbound = OrganizationBillingAddOnRequest$Outbound;
}

export function organizationBillingAddOnRequestToJSON(
  organizationBillingAddOnRequest: OrganizationBillingAddOnRequest,
): string {
  return JSON.stringify(
    OrganizationBillingAddOnRequest$outboundSchema.parse(
      organizationBillingAddOnRequest,
    ),
  );
}

export function organizationBillingAddOnRequestFromJSON(
  jsonString: string,
): SafeParseResult<OrganizationBillingAddOnRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrganizationBillingAddOnRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrganizationBillingAddOnRequest' from JSON`,
  );
}
