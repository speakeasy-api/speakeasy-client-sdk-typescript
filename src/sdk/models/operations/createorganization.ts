/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateOrganizationResponse = shared.ErrorT | shared.Organization;

/** @internal */
export const CreateOrganizationResponse$inboundSchema: z.ZodType<
  CreateOrganizationResponse,
  z.ZodTypeDef,
  unknown
> = z.union([shared.ErrorT$inboundSchema, shared.Organization$inboundSchema]);

/** @internal */
export type CreateOrganizationResponse$Outbound =
  | shared.ErrorT$Outbound
  | shared.Organization$Outbound;

/** @internal */
export const CreateOrganizationResponse$outboundSchema: z.ZodType<
  CreateOrganizationResponse$Outbound,
  z.ZodTypeDef,
  CreateOrganizationResponse
> = z.union([shared.ErrorT$outboundSchema, shared.Organization$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOrganizationResponse$ {
  /** @deprecated use `CreateOrganizationResponse$inboundSchema` instead. */
  export const inboundSchema = CreateOrganizationResponse$inboundSchema;
  /** @deprecated use `CreateOrganizationResponse$outboundSchema` instead. */
  export const outboundSchema = CreateOrganizationResponse$outboundSchema;
  /** @deprecated use `CreateOrganizationResponse$Outbound` instead. */
  export type Outbound = CreateOrganizationResponse$Outbound;
}

export function createOrganizationResponseToJSON(
  createOrganizationResponse: CreateOrganizationResponse,
): string {
  return JSON.stringify(
    CreateOrganizationResponse$outboundSchema.parse(createOrganizationResponse),
  );
}

export function createOrganizationResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateOrganizationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOrganizationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOrganizationResponse' from JSON`,
  );
}
