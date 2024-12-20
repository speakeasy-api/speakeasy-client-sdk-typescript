/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metadataDeleteVersionMetadata } from "../funcs/metadataDeleteVersionMetadata.js";
import { metadataGetVersionMetadata } from "../funcs/metadataGetVersionMetadata.js";
import { metadataInsertVersionMetadata } from "../funcs/metadataInsertVersionMetadata.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Metadata extends ClientSDK {
  /**
   * Delete metadata for a particular apiID and versionID.
   */
  async deleteVersionMetadata(
    request: operations.DeleteVersionMetadataRequest,
    options?: RequestOptions,
  ): Promise<shared.ErrorT | undefined> {
    return unwrapAsync(metadataDeleteVersionMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all metadata for a particular apiID and versionID.
   */
  async getVersionMetadata(
    request: operations.GetVersionMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.GetVersionMetadataResponse> {
    return unwrapAsync(metadataGetVersionMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Insert metadata for a particular apiID and versionID.
   */
  async insertVersionMetadata(
    request: operations.InsertVersionMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.InsertVersionMetadataResponse> {
    return unwrapAsync(metadataInsertVersionMetadata(
      this,
      request,
      options,
    ));
  }
}
