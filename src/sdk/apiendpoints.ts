/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { apiEndpointsDeleteApiEndpoint } from "../funcs/apiEndpointsDeleteApiEndpoint.js";
import { apiEndpointsFindApiEndpoint } from "../funcs/apiEndpointsFindApiEndpoint.js";
import { apiEndpointsGenerateOpenApiSpecForApiEndpoint } from "../funcs/apiEndpointsGenerateOpenApiSpecForApiEndpoint.js";
import {
  apiEndpointsGeneratePostmanCollectionForApiEndpoint,
  GeneratePostmanCollectionForApiEndpointAcceptEnum,
} from "../funcs/apiEndpointsGeneratePostmanCollectionForApiEndpoint.js";
import { apiEndpointsGetAllApiEndpoints } from "../funcs/apiEndpointsGetAllApiEndpoints.js";
import { apiEndpointsGetAllForVersionApiEndpoints } from "../funcs/apiEndpointsGetAllForVersionApiEndpoints.js";
import { apiEndpointsGetApiEndpoint } from "../funcs/apiEndpointsGetApiEndpoint.js";
import { apiEndpointsUpsertApiEndpoint } from "../funcs/apiEndpointsUpsertApiEndpoint.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export { GeneratePostmanCollectionForApiEndpointAcceptEnum } from "../funcs/apiEndpointsGeneratePostmanCollectionForApiEndpoint.js";

export class ApiEndpoints extends ClientSDK {
  /**
   * Delete an ApiEndpoint.
   *
   * @remarks
   * Delete an ApiEndpoint. This will also delete all associated Request Logs (if using a Postgres datastore).
   */
  async deleteApiEndpoint(
    request: operations.DeleteApiEndpointRequest,
    options?: RequestOptions,
  ): Promise<shared.ErrorT | undefined> {
    return unwrapAsync(apiEndpointsDeleteApiEndpoint(
      this,
      request,
      options,
    ));
  }

  /**
   * Find an ApiEndpoint via its displayName.
   *
   * @remarks
   * Find an ApiEndpoint via its displayName (set by operationId from a registered OpenAPI schema).
   * This is useful for finding the ID of an ApiEndpoint to use in the /v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID} endpoints.
   */
  async findApiEndpoint(
    request: operations.FindApiEndpointRequest,
    options?: RequestOptions,
  ): Promise<operations.FindApiEndpointResponse> {
    return unwrapAsync(apiEndpointsFindApiEndpoint(
      this,
      request,
      options,
    ));
  }

  /**
   * Generate an OpenAPI specification for a particular ApiEndpoint.
   *
   * @remarks
   * This endpoint will generate a new operation in any registered OpenAPI document if the operation does not already exist in the document.
   * Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.
   */
  async generateOpenApiSpecForApiEndpoint(
    request: operations.GenerateOpenApiSpecForApiEndpointRequest,
    options?: RequestOptions,
  ): Promise<operations.GenerateOpenApiSpecForApiEndpointResponse> {
    return unwrapAsync(apiEndpointsGenerateOpenApiSpecForApiEndpoint(
      this,
      request,
      options,
    ));
  }

  /**
   * Generate a Postman collection for a particular ApiEndpoint.
   *
   * @remarks
   * Generates a postman collection that allows the endpoint to be called from postman variables produced for any path/query/header parameters included in the OpenAPI document.
   */
  async generatePostmanCollectionForApiEndpoint(
    request: operations.GeneratePostmanCollectionForApiEndpointRequest,
    options?: RequestOptions & {
      acceptHeaderOverride?: GeneratePostmanCollectionForApiEndpointAcceptEnum;
    },
  ): Promise<operations.GeneratePostmanCollectionForApiEndpointResponse> {
    return unwrapAsync(apiEndpointsGeneratePostmanCollectionForApiEndpoint(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all Api endpoints for a particular apiID.
   */
  async getAllApiEndpoints(
    request: operations.GetAllApiEndpointsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAllApiEndpointsResponse> {
    return unwrapAsync(apiEndpointsGetAllApiEndpoints(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all ApiEndpoints for a particular apiID and versionID.
   */
  async getAllForVersionApiEndpoints(
    request: operations.GetAllForVersionApiEndpointsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAllForVersionApiEndpointsResponse> {
    return unwrapAsync(apiEndpointsGetAllForVersionApiEndpoints(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an ApiEndpoint.
   */
  async getApiEndpoint(
    request: operations.GetApiEndpointRequest,
    options?: RequestOptions,
  ): Promise<operations.GetApiEndpointResponse> {
    return unwrapAsync(apiEndpointsGetApiEndpoint(
      this,
      request,
      options,
    ));
  }

  /**
   * Upsert an ApiEndpoint.
   *
   * @remarks
   * Upsert an ApiEndpoint. If the ApiEndpoint does not exist it will be created, otherwise it will be updated.
   */
  async upsertApiEndpoint(
    request: operations.UpsertApiEndpointRequest,
    options?: RequestOptions,
  ): Promise<operations.UpsertApiEndpointResponse> {
    return unwrapAsync(apiEndpointsUpsertApiEndpoint(
      this,
      request,
      options,
    ));
  }
}
