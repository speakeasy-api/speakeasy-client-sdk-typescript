/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  RemoteDocument,
  RemoteDocument$inboundSchema,
  RemoteDocument$Outbound,
  RemoteDocument$outboundSchema,
} from "./remotedocument.js";

/**
 * Remote source configuration
 */
export type RemoteSource = {
  inputs: Array<RemoteDocument>;
  /**
   * A document hosted in the registry
   */
  output: RemoteDocument;
  overlays?: Array<RemoteDocument> | undefined;
};

/** @internal */
export const RemoteSource$inboundSchema: z.ZodType<
  RemoteSource,
  z.ZodTypeDef,
  unknown
> = z.object({
  inputs: z.array(RemoteDocument$inboundSchema),
  output: RemoteDocument$inboundSchema,
  overlays: z.array(RemoteDocument$inboundSchema).optional(),
});

/** @internal */
export type RemoteSource$Outbound = {
  inputs: Array<RemoteDocument$Outbound>;
  output: RemoteDocument$Outbound;
  overlays?: Array<RemoteDocument$Outbound> | undefined;
};

/** @internal */
export const RemoteSource$outboundSchema: z.ZodType<
  RemoteSource$Outbound,
  z.ZodTypeDef,
  RemoteSource
> = z.object({
  inputs: z.array(RemoteDocument$outboundSchema),
  output: RemoteDocument$outboundSchema,
  overlays: z.array(RemoteDocument$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoteSource$ {
  /** @deprecated use `RemoteSource$inboundSchema` instead. */
  export const inboundSchema = RemoteSource$inboundSchema;
  /** @deprecated use `RemoteSource$outboundSchema` instead. */
  export const outboundSchema = RemoteSource$outboundSchema;
  /** @deprecated use `RemoteSource$Outbound` instead. */
  export type Outbound = RemoteSource$Outbound;
}

export function remoteSourceToJSON(remoteSource: RemoteSource): string {
  return JSON.stringify(RemoteSource$outboundSchema.parse(remoteSource));
}

export function remoteSourceFromJSON(
  jsonString: string,
): SafeParseResult<RemoteSource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoteSource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoteSource' from JSON`,
  );
}