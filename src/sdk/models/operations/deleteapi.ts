/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteApiRequest = {
  /**
   * The ID of the Api to delete.
   */
  apiID: string;
  /**
   * The version ID of the Api to delete.
   */
  versionID: string;
};

/** @internal */
export const DeleteApiRequest$inboundSchema: z.ZodType<
  DeleteApiRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
});

/** @internal */
export type DeleteApiRequest$Outbound = {
  apiID: string;
  versionID: string;
};

/** @internal */
export const DeleteApiRequest$outboundSchema: z.ZodType<
  DeleteApiRequest$Outbound,
  z.ZodTypeDef,
  DeleteApiRequest
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteApiRequest$ {
  /** @deprecated use `DeleteApiRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteApiRequest$inboundSchema;
  /** @deprecated use `DeleteApiRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteApiRequest$outboundSchema;
  /** @deprecated use `DeleteApiRequest$Outbound` instead. */
  export type Outbound = DeleteApiRequest$Outbound;
}
