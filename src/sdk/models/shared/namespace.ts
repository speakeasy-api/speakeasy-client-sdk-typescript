/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

/**
 * A namespace contains many revisions.
 */
export type Namespace = {
  createdAt: Date;
  /**
   * {organization_slug}/{workspace_slug}/{namespace_name}
   */
  id: string;
  /**
   * A human-readable name for the namespace.
   */
  name: string;
  updatedAt: Date;
};

/** @internal */
export const Namespace$inboundSchema: z.ZodType<
  Namespace,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  id: z.string(),
  name: z.string(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type Namespace$Outbound = {
  created_at: string;
  id: string;
  name: string;
  updated_at: string;
};

/** @internal */
export const Namespace$outboundSchema: z.ZodType<
  Namespace$Outbound,
  z.ZodTypeDef,
  Namespace
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  id: z.string(),
  name: z.string(),
  updatedAt: z.date().transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Namespace$ {
  /** @deprecated use `Namespace$inboundSchema` instead. */
  export const inboundSchema = Namespace$inboundSchema;
  /** @deprecated use `Namespace$outboundSchema` instead. */
  export const outboundSchema = Namespace$outboundSchema;
  /** @deprecated use `Namespace$Outbound` instead. */
  export type Outbound = Namespace$Outbound;
}
