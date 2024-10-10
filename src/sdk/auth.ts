/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { authGetAccess } from "../funcs/authGetAccess.js";
import { authGetAccessToken } from "../funcs/authGetAccessToken.js";
import { authGetUser } from "../funcs/authGetUser.js";
import { authValidateApiKey } from "../funcs/authValidateApiKey.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Auth extends ClientSDK {
  /**
   * Get access allowances for a particular workspace
   *
   * @remarks
   * Checks if generation is permitted for a particular run of the CLI
   */
  async getAccess(
    request: operations.GetWorkspaceAccessRequest,
    options?: RequestOptions,
  ): Promise<shared.AccessDetails> {
    return unwrapAsync(authGetAccess(
      this,
      request,
      options,
    ));
  }

  /**
   * Get or refresh an access token for the current workspace.
   */
  async getAccessToken(
    request: operations.GetAccessTokenRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAccessTokenResponse> {
    return unwrapAsync(authGetAccessToken(
      this,
      request,
      options,
    ));
  }

  /**
   * Get information about the current user.
   */
  async getUser(
    options?: RequestOptions,
  ): Promise<operations.GetUserResponse> {
    return unwrapAsync(authGetUser(
      this,
      options,
    ));
  }

  /**
   * Validate the current api key.
   */
  async validateApiKey(
    options?: RequestOptions,
  ): Promise<operations.ValidateApiKeyResponse> {
    return unwrapAsync(authValidateApiKey(
      this,
      options,
    ));
  }
}
