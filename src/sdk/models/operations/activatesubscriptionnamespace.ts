/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ActivateSubscriptionNamespaceRequest = {
  /**
   * The existing subscription ID
   */
  subscriptionID: string;
  /**
   * The namespace name
   */
  namespaceName: string;
};

/** @internal */
export const ActivateSubscriptionNamespaceRequest$inboundSchema: z.ZodType<
  ActivateSubscriptionNamespaceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  subscriptionID: z.string(),
  namespaceName: z.string(),
});

/** @internal */
export type ActivateSubscriptionNamespaceRequest$Outbound = {
  subscriptionID: string;
  namespaceName: string;
};

/** @internal */
export const ActivateSubscriptionNamespaceRequest$outboundSchema: z.ZodType<
  ActivateSubscriptionNamespaceRequest$Outbound,
  z.ZodTypeDef,
  ActivateSubscriptionNamespaceRequest
> = z.object({
  subscriptionID: z.string(),
  namespaceName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivateSubscriptionNamespaceRequest$ {
  /** @deprecated use `ActivateSubscriptionNamespaceRequest$inboundSchema` instead. */
  export const inboundSchema =
    ActivateSubscriptionNamespaceRequest$inboundSchema;
  /** @deprecated use `ActivateSubscriptionNamespaceRequest$outboundSchema` instead. */
  export const outboundSchema =
    ActivateSubscriptionNamespaceRequest$outboundSchema;
  /** @deprecated use `ActivateSubscriptionNamespaceRequest$Outbound` instead. */
  export type Outbound = ActivateSubscriptionNamespaceRequest$Outbound;
}

export function activateSubscriptionNamespaceRequestToJSON(
  activateSubscriptionNamespaceRequest: ActivateSubscriptionNamespaceRequest,
): string {
  return JSON.stringify(
    ActivateSubscriptionNamespaceRequest$outboundSchema.parse(
      activateSubscriptionNamespaceRequest,
    ),
  );
}

export function activateSubscriptionNamespaceRequestFromJSON(
  jsonString: string,
): SafeParseResult<ActivateSubscriptionNamespaceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ActivateSubscriptionNamespaceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActivateSubscriptionNamespaceRequest' from JSON`,
  );
}
