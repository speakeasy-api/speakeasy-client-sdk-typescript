/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { publishingTokensCreate } from "../funcs/publishingTokensCreate.js";
import { publishingTokensDelete } from "../funcs/publishingTokensDelete.js";
import { publishingTokensGet } from "../funcs/publishingTokensGet.js";
import { publishingTokensList } from "../funcs/publishingTokensList.js";
import { publishingTokensResolveMetadata } from "../funcs/publishingTokensResolveMetadata.js";
import { publishingTokensResolveTarget } from "../funcs/publishingTokensResolveTarget.js";
import { publishingTokensUpdate } from "../funcs/publishingTokensUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class PublishingTokens extends ClientSDK {
  /**
   * Create a publishing token for a workspace
   *
   * @remarks
   * Creates a publishing token for the current workspace
   */
  async create(
    request?: operations.CreatePublishingTokenRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<shared.PublishingToken> {
    return unwrapAsync(publishingTokensCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a specific publishing token
   *
   * @remarks
   * Delete a particular publishing token.
   */
  async delete(
    request: operations.DeletePublishingTokenRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(publishingTokensDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a specific publishing token
   *
   * @remarks
   * Get information about a particular publishing token.
   */
  async get(
    request: operations.GetPublishingTokenByIDRequest,
    options?: RequestOptions,
  ): Promise<shared.PublishingToken> {
    return unwrapAsync(publishingTokensGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get publishing tokens for a workspace
   *
   * @remarks
   * Returns a publishing token for the current workspace
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<shared.PublishingToken>> {
    return unwrapAsync(publishingTokensList(
      this,
      options,
    ));
  }

  /**
   * Get metadata about the token
   *
   * @remarks
   * Get information about a particular publishing token.
   */
  async resolveMetadata(
    request: operations.GetPublishingTokenPublicMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.GetPublishingTokenPublicMetadataResponseBody> {
    return unwrapAsync(publishingTokensResolveMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a specific publishing token target
   *
   * @remarks
   * Get information about a particular publishing token target.
   */
  async resolveTarget(
    request: operations.GetPublishingTokenTargetByIDRequest,
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(publishingTokensResolveTarget(
      this,
      request,
      options,
    ));
  }

  /**
   * Updates the validitity period of a publishing token
   *
   * @remarks
   * Updates the validity period of a particular publishing token.
   */
  async update(
    request: operations.UpdatePublishingTokenExpirationRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(publishingTokensUpdate(
      this,
      request,
      options,
    ));
  }
}
