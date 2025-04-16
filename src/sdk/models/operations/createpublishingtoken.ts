/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The publishing token to create
 */
export type CreatePublishingTokenRequestBody = {
  targetId: string;
  targetResource: string;
  tokenName: string;
  validUntil: Date;
};

/** @internal */
export const CreatePublishingTokenRequestBody$inboundSchema: z.ZodType<
  CreatePublishingTokenRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  target_id: z.string(),
  target_resource: z.string(),
  token_name: z.string(),
  valid_until: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
}).transform((v) => {
  return remap$(v, {
    "target_id": "targetId",
    "target_resource": "targetResource",
    "token_name": "tokenName",
    "valid_until": "validUntil",
  });
});

/** @internal */
export type CreatePublishingTokenRequestBody$Outbound = {
  target_id: string;
  target_resource: string;
  token_name: string;
  valid_until: string;
};

/** @internal */
export const CreatePublishingTokenRequestBody$outboundSchema: z.ZodType<
  CreatePublishingTokenRequestBody$Outbound,
  z.ZodTypeDef,
  CreatePublishingTokenRequestBody
> = z.object({
  targetId: z.string(),
  targetResource: z.string(),
  tokenName: z.string(),
  validUntil: z.date().transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    targetId: "target_id",
    targetResource: "target_resource",
    tokenName: "token_name",
    validUntil: "valid_until",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePublishingTokenRequestBody$ {
  /** @deprecated use `CreatePublishingTokenRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreatePublishingTokenRequestBody$inboundSchema;
  /** @deprecated use `CreatePublishingTokenRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreatePublishingTokenRequestBody$outboundSchema;
  /** @deprecated use `CreatePublishingTokenRequestBody$Outbound` instead. */
  export type Outbound = CreatePublishingTokenRequestBody$Outbound;
}

export function createPublishingTokenRequestBodyToJSON(
  createPublishingTokenRequestBody: CreatePublishingTokenRequestBody,
): string {
  return JSON.stringify(
    CreatePublishingTokenRequestBody$outboundSchema.parse(
      createPublishingTokenRequestBody,
    ),
  );
}

export function createPublishingTokenRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreatePublishingTokenRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePublishingTokenRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePublishingTokenRequestBody' from JSON`,
  );
}
