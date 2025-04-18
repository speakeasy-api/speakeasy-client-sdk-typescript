/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type FileT = {
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  fileName: string;
};

/**
 * The report file to upload provided as a multipart/form-data file segment.
 */
export type UploadReportRequestBody = {
  data: shared.Report;
  file: FileT | Blob;
};

/**
 * OK
 */
export type UploadReportUploadedReport = {
  url: string;
};

/** @internal */
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z
  .object({
    content: z.union([
      z.instanceof(ReadableStream<Uint8Array>),
      z.instanceof(Blob),
      z.instanceof(ArrayBuffer),
      z.instanceof(Uint8Array),
    ]),
    fileName: z.string(),
  });

/** @internal */
export type FileT$Outbound = {
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  fileName: string;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<
  FileT$Outbound,
  z.ZodTypeDef,
  FileT
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
export namespace FileT$ {
  /** @deprecated use `FileT$inboundSchema` instead. */
  export const inboundSchema = FileT$inboundSchema;
  /** @deprecated use `FileT$outboundSchema` instead. */
  export const outboundSchema = FileT$outboundSchema;
  /** @deprecated use `FileT$Outbound` instead. */
  export type Outbound = FileT$Outbound;
}

export function fileToJSON(fileT: FileT): string {
  return JSON.stringify(FileT$outboundSchema.parse(fileT));
}

export function fileFromJSON(
  jsonString: string,
): SafeParseResult<FileT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileT' from JSON`,
  );
}

/** @internal */
export const UploadReportRequestBody$inboundSchema: z.ZodType<
  UploadReportRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: shared.Report$inboundSchema,
  file: z.lazy(() => FileT$inboundSchema),
});

/** @internal */
export type UploadReportRequestBody$Outbound = {
  data: shared.Report$Outbound;
  file: FileT$Outbound | Blob;
};

/** @internal */
export const UploadReportRequestBody$outboundSchema: z.ZodType<
  UploadReportRequestBody$Outbound,
  z.ZodTypeDef,
  UploadReportRequestBody
> = z.object({
  data: shared.Report$outboundSchema,
  file: z.lazy(() => FileT$outboundSchema).or(blobLikeSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadReportRequestBody$ {
  /** @deprecated use `UploadReportRequestBody$inboundSchema` instead. */
  export const inboundSchema = UploadReportRequestBody$inboundSchema;
  /** @deprecated use `UploadReportRequestBody$outboundSchema` instead. */
  export const outboundSchema = UploadReportRequestBody$outboundSchema;
  /** @deprecated use `UploadReportRequestBody$Outbound` instead. */
  export type Outbound = UploadReportRequestBody$Outbound;
}

export function uploadReportRequestBodyToJSON(
  uploadReportRequestBody: UploadReportRequestBody,
): string {
  return JSON.stringify(
    UploadReportRequestBody$outboundSchema.parse(uploadReportRequestBody),
  );
}

export function uploadReportRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadReportRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadReportRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadReportRequestBody' from JSON`,
  );
}

/** @internal */
export const UploadReportUploadedReport$inboundSchema: z.ZodType<
  UploadReportUploadedReport,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
});

/** @internal */
export type UploadReportUploadedReport$Outbound = {
  url: string;
};

/** @internal */
export const UploadReportUploadedReport$outboundSchema: z.ZodType<
  UploadReportUploadedReport$Outbound,
  z.ZodTypeDef,
  UploadReportUploadedReport
> = z.object({
  url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadReportUploadedReport$ {
  /** @deprecated use `UploadReportUploadedReport$inboundSchema` instead. */
  export const inboundSchema = UploadReportUploadedReport$inboundSchema;
  /** @deprecated use `UploadReportUploadedReport$outboundSchema` instead. */
  export const outboundSchema = UploadReportUploadedReport$outboundSchema;
  /** @deprecated use `UploadReportUploadedReport$Outbound` instead. */
  export type Outbound = UploadReportUploadedReport$Outbound;
}

export function uploadReportUploadedReportToJSON(
  uploadReportUploadedReport: UploadReportUploadedReport,
): string {
  return JSON.stringify(
    UploadReportUploadedReport$outboundSchema.parse(uploadReportUploadedReport),
  );
}

export function uploadReportUploadedReportFromJSON(
  jsonString: string,
): SafeParseResult<UploadReportUploadedReport, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadReportUploadedReport$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadReportUploadedReport' from JSON`,
  );
}
