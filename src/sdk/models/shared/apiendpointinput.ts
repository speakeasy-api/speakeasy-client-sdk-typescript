/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

/**
 * An ApiEndpoint is a description of an Endpoint for an API.
 */
export type ApiEndpointInput = {
  /**
   * The ID of this ApiEndpoint. This is a hash of the method and path.
   */
  apiEndpointId: string;
  /**
   * A detailed description of the ApiEndpoint.
   */
  description: string;
  /**
   * A human-readable name for the ApiEndpoint.
   */
  displayName: string;
  /**
   * HTTP verb.
   */
  method: string;
  /**
   * Path that handles this Api.
   */
  path: string;
  /**
   * The version ID of the Api this ApiEndpoint belongs to.
   */
  versionId: string;
};

/** @internal */
export const ApiEndpointInput$inboundSchema: z.ZodType<
  ApiEndpointInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  api_endpoint_id: z.string(),
  description: z.string(),
  display_name: z.string(),
  method: z.string(),
  path: z.string(),
  version_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "api_endpoint_id": "apiEndpointId",
    "display_name": "displayName",
    "version_id": "versionId",
  });
});

/** @internal */
export type ApiEndpointInput$Outbound = {
  api_endpoint_id: string;
  description: string;
  display_name: string;
  method: string;
  path: string;
  version_id: string;
};

/** @internal */
export const ApiEndpointInput$outboundSchema: z.ZodType<
  ApiEndpointInput$Outbound,
  z.ZodTypeDef,
  ApiEndpointInput
> = z.object({
  apiEndpointId: z.string(),
  description: z.string(),
  displayName: z.string(),
  method: z.string(),
  path: z.string(),
  versionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    apiEndpointId: "api_endpoint_id",
    displayName: "display_name",
    versionId: "version_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiEndpointInput$ {
  /** @deprecated use `ApiEndpointInput$inboundSchema` instead. */
  export const inboundSchema = ApiEndpointInput$inboundSchema;
  /** @deprecated use `ApiEndpointInput$outboundSchema` instead. */
  export const outboundSchema = ApiEndpointInput$outboundSchema;
  /** @deprecated use `ApiEndpointInput$Outbound` instead. */
  export type Outbound = ApiEndpointInput$Outbound;
}
