/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type Revision = {
  createdAt: Date;
  digest: string;
  /**
   * Format {namespace_id}/{revision_digest}
   */
  id: string;
  namespaceName: string;
  tags: Array<string>;
  updatedAt: Date;
};

/** @internal */
export const Revision$inboundSchema: z.ZodType<
  Revision,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  digest: z.string(),
  id: z.string(),
  namespace_name: z.string(),
  tags: z.array(z.string()),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "namespace_name": "namespaceName",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type Revision$Outbound = {
  created_at: string;
  digest: string;
  id: string;
  namespace_name: string;
  tags: Array<string>;
  updated_at: string;
};

/** @internal */
export const Revision$outboundSchema: z.ZodType<
  Revision$Outbound,
  z.ZodTypeDef,
  Revision
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  digest: z.string(),
  id: z.string(),
  namespaceName: z.string(),
  tags: z.array(z.string()),
  updatedAt: z.date().transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    namespaceName: "namespace_name",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Revision$ {
  /** @deprecated use `Revision$inboundSchema` instead. */
  export const inboundSchema = Revision$inboundSchema;
  /** @deprecated use `Revision$outboundSchema` instead. */
  export const outboundSchema = Revision$outboundSchema;
  /** @deprecated use `Revision$Outbound` instead. */
  export type Outbound = Revision$Outbound;
}
