/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { codeSamplesGenerateCodeSamplePreview } from "../funcs/codeSamplesGenerateCodeSamplePreview.js";
import { codeSamplesGenerateCodeSamplePreviewAsync } from "../funcs/codeSamplesGenerateCodeSamplePreviewAsync.js";
import { codeSamplesGet } from "../funcs/codeSamplesGet.js";
import { codeSamplesGetCodeSamplePreviewAsync } from "../funcs/codeSamplesGetCodeSamplePreviewAsync.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class CodeSamples extends ClientSDK {
  /**
   * Generate Code Sample previews from a file and configuration parameters.
   *
   * @remarks
   * This endpoint generates Code Sample previews from a file and configuration parameters.
   */
  async generateCodeSamplePreview(
    request: shared.CodeSampleSchemaInput,
    options?: RequestOptions,
  ): Promise<shared.UsageSnippets> {
    return unwrapAsync(codeSamplesGenerateCodeSamplePreview(
      this,
      request,
      options,
    ));
  }

  /**
   * Initiate asynchronous Code Sample preview generation from a file and configuration parameters, receiving an async JobID response for polling.
   *
   * @remarks
   * This endpoint generates Code Sample previews from a file and configuration parameters, receiving an async JobID response for polling.
   */
  async generateCodeSamplePreviewAsync(
    request: shared.CodeSampleSchemaInput,
    options?: RequestOptions,
  ): Promise<operations.GenerateCodeSamplePreviewAsyncResponseBody> {
    return unwrapAsync(codeSamplesGenerateCodeSamplePreviewAsync(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve usage snippets
   *
   * @remarks
   * Retrieve usage snippets from an OpenAPI document stored in the registry. Supports filtering by language and operation ID.
   */
  async get(
    request: operations.GetCodeSamplesRequest,
    options?: RequestOptions,
  ): Promise<shared.UsageSnippets> {
    return unwrapAsync(codeSamplesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Poll for the result of an asynchronous Code Sample preview generation.
   *
   * @remarks
   * Poll for the result of an asynchronous Code Sample preview generation.
   */
  async getCodeSamplePreviewAsync(
    request: operations.GetCodeSamplePreviewAsyncRequest,
    options?: RequestOptions,
  ): Promise<operations.GetCodeSamplePreviewAsyncResponse> {
    return unwrapAsync(codeSamplesGetCodeSamplePreviewAsync(
      this,
      request,
      options,
    ));
  }
}
