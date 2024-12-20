/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

/**
 * Configuration for filter operations
 */
export type QueryParamOp = {
  /**
   * Whether to AND or OR the filters
   */
  and: boolean;
};

export type GetApisRequest = {
  /**
   * Configuration for filter operations
   */
  op?: QueryParamOp | undefined;
  /**
   * Metadata to filter Apis on
   */
  metadata?: { [k: string]: Array<string> } | undefined;
};

export type GetApisResponse = shared.ErrorT | Array<shared.Api>;

/** @internal */
export const QueryParamOp$inboundSchema: z.ZodType<
  QueryParamOp,
  z.ZodTypeDef,
  unknown
> = z.object({
  and: z.boolean(),
});

/** @internal */
export type QueryParamOp$Outbound = {
  and: boolean;
};

/** @internal */
export const QueryParamOp$outboundSchema: z.ZodType<
  QueryParamOp$Outbound,
  z.ZodTypeDef,
  QueryParamOp
> = z.object({
  and: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamOp$ {
  /** @deprecated use `QueryParamOp$inboundSchema` instead. */
  export const inboundSchema = QueryParamOp$inboundSchema;
  /** @deprecated use `QueryParamOp$outboundSchema` instead. */
  export const outboundSchema = QueryParamOp$outboundSchema;
  /** @deprecated use `QueryParamOp$Outbound` instead. */
  export type Outbound = QueryParamOp$Outbound;
}

/** @internal */
export const GetApisRequest$inboundSchema: z.ZodType<
  GetApisRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  op: z.lazy(() => QueryParamOp$inboundSchema).optional(),
  metadata: z.record(z.array(z.string())).optional(),
});

/** @internal */
export type GetApisRequest$Outbound = {
  op?: QueryParamOp$Outbound | undefined;
  metadata?: { [k: string]: Array<string> } | undefined;
};

/** @internal */
export const GetApisRequest$outboundSchema: z.ZodType<
  GetApisRequest$Outbound,
  z.ZodTypeDef,
  GetApisRequest
> = z.object({
  op: z.lazy(() => QueryParamOp$outboundSchema).optional(),
  metadata: z.record(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApisRequest$ {
  /** @deprecated use `GetApisRequest$inboundSchema` instead. */
  export const inboundSchema = GetApisRequest$inboundSchema;
  /** @deprecated use `GetApisRequest$outboundSchema` instead. */
  export const outboundSchema = GetApisRequest$outboundSchema;
  /** @deprecated use `GetApisRequest$Outbound` instead. */
  export type Outbound = GetApisRequest$Outbound;
}

/** @internal */
export const GetApisResponse$inboundSchema: z.ZodType<
  GetApisResponse,
  z.ZodTypeDef,
  unknown
> = z.union([shared.ErrorT$inboundSchema, z.array(shared.Api$inboundSchema)]);

/** @internal */
export type GetApisResponse$Outbound =
  | shared.ErrorT$Outbound
  | Array<shared.Api$Outbound>;

/** @internal */
export const GetApisResponse$outboundSchema: z.ZodType<
  GetApisResponse$Outbound,
  z.ZodTypeDef,
  GetApisResponse
> = z.union([shared.ErrorT$outboundSchema, z.array(shared.Api$outboundSchema)]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApisResponse$ {
  /** @deprecated use `GetApisResponse$inboundSchema` instead. */
  export const inboundSchema = GetApisResponse$inboundSchema;
  /** @deprecated use `GetApisResponse$outboundSchema` instead. */
  export const outboundSchema = GetApisResponse$outboundSchema;
  /** @deprecated use `GetApisResponse$Outbound` instead. */
  export type Outbound = GetApisResponse$Outbound;
}
