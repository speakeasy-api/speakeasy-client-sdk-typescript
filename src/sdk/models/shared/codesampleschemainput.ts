/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SchemaFile = {
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  fileName: string;
};

export type CodeSampleSchemaInput = {
  /**
   * The language to generate code samples for
   */
  language: string;
  /**
   * A list of operations IDs to generate code samples for
   */
  operationIds?: Array<string> | undefined;
  /**
   * The name of the package
   */
  packageName?: string | undefined;
  /**
   * The OpenAPI file to be uploaded
   */
  schemaFile: SchemaFile | Blob;
  /**
   * The SDK class name
   */
  sdkClassName?: string | undefined;
};

/** @internal */
export const SchemaFile$inboundSchema: z.ZodType<
  SchemaFile,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
  fileName: z.string(),
});

/** @internal */
export type SchemaFile$Outbound = {
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  fileName: string;
};

/** @internal */
export const SchemaFile$outboundSchema: z.ZodType<
  SchemaFile$Outbound,
  z.ZodTypeDef,
  SchemaFile
> = z.object({
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
  fileName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemaFile$ {
  /** @deprecated use `SchemaFile$inboundSchema` instead. */
  export const inboundSchema = SchemaFile$inboundSchema;
  /** @deprecated use `SchemaFile$outboundSchema` instead. */
  export const outboundSchema = SchemaFile$outboundSchema;
  /** @deprecated use `SchemaFile$Outbound` instead. */
  export type Outbound = SchemaFile$Outbound;
}

export function schemaFileToJSON(schemaFile: SchemaFile): string {
  return JSON.stringify(SchemaFile$outboundSchema.parse(schemaFile));
}

export function schemaFileFromJSON(
  jsonString: string,
): SafeParseResult<SchemaFile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SchemaFile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SchemaFile' from JSON`,
  );
}

/** @internal */
export const CodeSampleSchemaInput$inboundSchema: z.ZodType<
  CodeSampleSchemaInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  language: z.string(),
  operation_ids: z.array(z.string()).optional(),
  package_name: z.string().optional(),
  schema_file: z.lazy(() => SchemaFile$inboundSchema),
  sdk_class_name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "operation_ids": "operationIds",
    "package_name": "packageName",
    "schema_file": "schemaFile",
    "sdk_class_name": "sdkClassName",
  });
});

/** @internal */
export type CodeSampleSchemaInput$Outbound = {
  language: string;
  operation_ids?: Array<string> | undefined;
  package_name?: string | undefined;
  schema_file: SchemaFile$Outbound | Blob;
  sdk_class_name?: string | undefined;
};

/** @internal */
export const CodeSampleSchemaInput$outboundSchema: z.ZodType<
  CodeSampleSchemaInput$Outbound,
  z.ZodTypeDef,
  CodeSampleSchemaInput
> = z.object({
  language: z.string(),
  operationIds: z.array(z.string()).optional(),
  packageName: z.string().optional(),
  schemaFile: z.lazy(() => SchemaFile$outboundSchema).or(blobLikeSchema),
  sdkClassName: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    operationIds: "operation_ids",
    packageName: "package_name",
    schemaFile: "schema_file",
    sdkClassName: "sdk_class_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CodeSampleSchemaInput$ {
  /** @deprecated use `CodeSampleSchemaInput$inboundSchema` instead. */
  export const inboundSchema = CodeSampleSchemaInput$inboundSchema;
  /** @deprecated use `CodeSampleSchemaInput$outboundSchema` instead. */
  export const outboundSchema = CodeSampleSchemaInput$outboundSchema;
  /** @deprecated use `CodeSampleSchemaInput$Outbound` instead. */
  export type Outbound = CodeSampleSchemaInput$Outbound;
}

export function codeSampleSchemaInputToJSON(
  codeSampleSchemaInput: CodeSampleSchemaInput,
): string {
  return JSON.stringify(
    CodeSampleSchemaInput$outboundSchema.parse(codeSampleSchemaInput),
  );
}

export function codeSampleSchemaInputFromJSON(
  jsonString: string,
): SafeParseResult<CodeSampleSchemaInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CodeSampleSchemaInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CodeSampleSchemaInput' from JSON`,
  );
}
