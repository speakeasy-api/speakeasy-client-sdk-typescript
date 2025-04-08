/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type GetOrganizationUsageResponse =
  | shared.ErrorT
  | shared.OrganizationUsageResponse;

/** @internal */
export const GetOrganizationUsageResponse$inboundSchema: z.ZodType<
  GetOrganizationUsageResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.ErrorT$inboundSchema,
  shared.OrganizationUsageResponse$inboundSchema,
]);

/** @internal */
export type GetOrganizationUsageResponse$Outbound =
  | shared.ErrorT$Outbound
  | shared.OrganizationUsageResponse$Outbound;

/** @internal */
export const GetOrganizationUsageResponse$outboundSchema: z.ZodType<
  GetOrganizationUsageResponse$Outbound,
  z.ZodTypeDef,
  GetOrganizationUsageResponse
> = z.union([
  shared.ErrorT$outboundSchema,
  shared.OrganizationUsageResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrganizationUsageResponse$ {
  /** @deprecated use `GetOrganizationUsageResponse$inboundSchema` instead. */
  export const inboundSchema = GetOrganizationUsageResponse$inboundSchema;
  /** @deprecated use `GetOrganizationUsageResponse$outboundSchema` instead. */
  export const outboundSchema = GetOrganizationUsageResponse$outboundSchema;
  /** @deprecated use `GetOrganizationUsageResponse$Outbound` instead. */
  export type Outbound = GetOrganizationUsageResponse$Outbound;
}

export function getOrganizationUsageResponseToJSON(
  getOrganizationUsageResponse: GetOrganizationUsageResponse,
): string {
  return JSON.stringify(
    GetOrganizationUsageResponse$outboundSchema.parse(
      getOrganizationUsageResponse,
    ),
  );
}

export function getOrganizationUsageResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetOrganizationUsageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOrganizationUsageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOrganizationUsageResponse' from JSON`,
  );
}
