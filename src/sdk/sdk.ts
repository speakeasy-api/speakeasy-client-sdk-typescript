import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import { CreateSecurityClient } from "../internal/utils/security";
import { Security } from "./models/shared";
import * as utils from "../internal/utils/utils";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';

const Servers = [
  "https://api.prod.speakeasyapi.dev",
] as const;

export function WithServerURL(serverURL: string, params?: Map<string, string>): Function {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
    sdk.defaultClient = axios.create({ baseURL: serverURL });
  };
}

export function WithSecurity(serverURL: string, security: Security): Function {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.serverURL = serverURL;
    sdk.securityClient = CreateSecurityClient(serverURL, security);
  };
}

// SDK Documentation: https://docs.speakeasyapi.dev - The Speakeasy Platform Documentation
export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  serverURL: string;

  constructor(...opts: Function[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }
  }
  
  // DeleteApi - Delete an Api.
  /** 
   * Delete a particular version of an Api. The will also delete all associated ApiEndpoints, Metadata, Schemas & Request Logs (if using a Postgres datastore).
  **/
  DeleteApi(
    req: operations.DeleteApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteApiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteApiEndpoint - Delete an ApiEndpoint.
  /** 
   * Delete an ApiEndpoint. This will also delete all associated Request Logs (if using a Postgres datastore).
  **/
  DeleteApiEndpoint(
    req: operations.DeleteApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSchema - Delete a particular schema revision for an Api.
  DeleteSchema(
    req: operations.DeleteSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteVersionMetadata - Delete metadata for a particular apiID and versionID.
  DeleteVersionMetadata(
    req: operations.DeleteVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVersionMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVersionMetadataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata/{metaKey}/{metaValue}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteVersionMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DownloadSchema - Download the latest schema for a particular apiID.
  DownloadSchema(
    req: operations.DownloadSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/download", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DownloadSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.schema = httpRes?.data;
            if (MatchContentType(contentType, "application/json")) res.schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DownloadSchemaRevision - Download a particular schema revision for an Api.
  DownloadSchemaRevision(
    req: operations.DownloadSchemaRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSchemaRevisionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadSchemaRevisionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}/download", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DownloadSchemaRevisionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.schema = httpRes?.data;
            if (MatchContentType(contentType, "application/json")) res.schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FindApiEndpoint - Find an ApiEndpoint via its displayName.
  /** 
   * Find an ApiEndpoint via its displayName (set by operationId from a registered OpenAPI schema).
   * This is useful for finding the ID of an ApiEndpoint to use in the /v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID} endpoints.
  **/
  FindApiEndpoint(
    req: operations.FindApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FindApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.apiEndpoint = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GenerateOpenApiSpec - Generate an OpenAPI specification for a particular Api.
  /** 
   * This endpoint will generate any missing operations in any registered OpenAPI document if the operation does not already exist in the document.
   * Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.
  **/
  GenerateOpenApiSpec(
    req: operations.GenerateOpenApiSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateOpenApiSpecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateOpenApiSpecRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/generate/openapi", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GenerateOpenApiSpecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.generateOpenApiSpecDiff = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GenerateOpenApiSpecForApiEndpoint - Generate an OpenAPI specification for a particular ApiEndpoint.
  /** 
   * This endpoint will generate a new operation in any registered OpenAPI document if the operation does not already exist in the document.
   * Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.
  **/
  GenerateOpenApiSpecForApiEndpoint(
    req: operations.GenerateOpenApiSpecForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateOpenApiSpecForApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateOpenApiSpecForApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/openapi", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GenerateOpenApiSpecForApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.generateOpenApiSpecDiff = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GeneratePostmanCollection - Generate a Postman collection for a particular Api.
  /** 
   * Generates a postman collection containing all endpoints for a particular API. Includes variables produced for any path/query/header parameters included in the OpenAPI document.
  **/
  GeneratePostmanCollection(
    req: operations.GeneratePostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeneratePostmanCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GeneratePostmanCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/generate/postman", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GeneratePostmanCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.postmanCollection = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GeneratePostmanCollectionForApiEndpoint - Generate a Postman collection for a particular ApiEndpoint.
  /** 
   * Generates a postman collection that allows the endpoint to be called from postman variables produced for any path/query/header parameters included in the OpenAPI document.
  **/
  GeneratePostmanCollectionForApiEndpoint(
    req: operations.GeneratePostmanCollectionForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeneratePostmanCollectionForApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GeneratePostmanCollectionForApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GeneratePostmanCollectionForApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.postmanCollection = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GenerateRequestPostmanCollection - Generate a Postman collection for a particular request.
  /** 
   * Generates a Postman collection for a particular request. 
   * Allowing it to be replayed with the same inputs that were captured by the SDK.
  **/
  GenerateRequestPostmanCollection(
    req: operations.GenerateRequestPostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateRequestPostmanCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateRequestPostmanCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/eventlog/{requestID}/generate/postman", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GenerateRequestPostmanCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.postmanCollection = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAllApiEndpoints - Get all Api endpoints for a particular apiID.
  GetAllApiEndpoints(
    req: operations.GetAllApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiEndpointsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllApiEndpointsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/api_endpoints", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllApiEndpointsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.apiEndpoints = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAllApiVersions - Get all Api versions for a particular ApiEndpoint.
  /** 
   * Get all Api versions for a particular ApiEndpoint.
   * Supports filtering the versions based on metadata attributes.
  **/
  GetAllApiVersions(
    req: operations.GetAllApiVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllApiVersionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllApiVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.apis = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAllForVersionApiEndpoints - Get all ApiEndpoints for a particular apiID and versionID.
  GetAllForVersionApiEndpoints(
    req: operations.GetAllForVersionApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllForVersionApiEndpointsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllForVersionApiEndpointsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllForVersionApiEndpointsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.apiEndpoints = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiEndpoint - Get an ApiEndpoint.
  GetApiEndpoint(
    req: operations.GetApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.apiEndpoint = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApis - Get a list of Apis for a given workspace
  /** 
   * Get a list of all Apis and their versions for a given workspace.
   * Supports filtering the APIs based on metadata attributes.
  **/
  GetApis(
    req: operations.GetApisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApisRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/apis";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.apis = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEmbedAccessToken - Get an embed access token for the current workspace.
  /** 
   * Returns an embed access token for the current workspace. This can be used to authenticate access to externally embedded content.
   * Filters can be applied allowing views to be filtered to things like particular customerIds.
  **/
  GetEmbedAccessToken(
    req: operations.GetEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEmbedAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEmbedAccessTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-token";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEmbedAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.embedAccessTokenResponse = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRequestFromEventLog - Get information about a particular request.
  GetRequestFromEventLog(
    req: operations.GetRequestFromEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRequestFromEventLogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRequestFromEventLogRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/eventlog/{requestID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRequestFromEventLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.unboundedRequest = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchema - Get information about the latest schema.
  /** 
   * Returns information about the last uploaded schema for a particular API version. 
   * This won't include the schema itself, that can be retrieved via the downloadSchema operation.
  **/
  GetSchema(
    req: operations.GetSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchemaDiff - Get a diff of two schema revisions for an Api.
  GetSchemaDiff(
    req: operations.GetSchemaDiffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaDiffResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchemaDiffRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{baseRevisionID}/diff/{targetRevisionID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchemaDiffResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.schemaDiff = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchemaRevision - Get information about a particular schema revision for an Api.
  /** 
   * Returns information about the last uploaded schema for a particular schema revision. 
   * This won't include the schema itself, that can be retrieved via the downloadSchema operation.
  **/
  GetSchemaRevision(
    req: operations.GetSchemaRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaRevisionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchemaRevisionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchemaRevisionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchemas - Get information about all schemas associated with a particular apiID.
  /** 
   * Returns information the schemas associated with a particular apiID. 
   * This won't include the schemas themselves, they can be retrieved via the downloadSchema operation.
  **/
  GetSchemas(
    req: operations.GetSchemasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchemasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schemas", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchemasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.schemata = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetValidEmbedAccessTokens - Get all valid embed access tokens for the current workspace.
  GetValidEmbedAccessTokens(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetValidEmbedAccessTokensResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-tokens/valid";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetValidEmbedAccessTokensResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.embedTokens = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVersionMetadata - Get all metadata for a particular apiID and versionID.
  GetVersionMetadata(
    req: operations.GetVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVersionMetadataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVersionMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.versionMetadata = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // InsertVersionMetadata - Insert metadata for a particular apiID and versionID.
  InsertVersionMetadata(
    req: operations.InsertVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InsertVersionMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InsertVersionMetadataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.InsertVersionMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.versionMetadata = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // QueryEventLog - Query the event log to retrieve a list of requests.
  /** 
   * Supports retrieving a list of request captured by the SDK for this workspace.
   * Allows the filtering of requests on a number of criteria such as ApiID, VersionID, Path, Method, etc.
  **/
  QueryEventLog(
    req: operations.QueryEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryEventLogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QueryEventLogRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/eventlog/query";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.QueryEventLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.boundedRequests = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RegisterSchema - Register a schema.
  /** 
   * Allows uploading a schema for a particular API version.
   * This will be used to populate ApiEndpoints and used as a base for any schema generation if present.
  **/
  RegisterSchema(
    req: operations.RegisterSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegisterSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegisterSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RegisterSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RevokeEmbedAccessToken - Revoke an embed access EmbedToken.
  RevokeEmbedAccessToken(
    req: operations.RevokeEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeEmbedAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeEmbedAccessTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/workspace/embed-access-tokens/{tokenID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RevokeEmbedAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpsertApi - Upsert an Api
  /** 
   * Upsert an Api. If the Api does not exist, it will be created.
   * If the Api exists, it will be updated.
  **/
  UpsertApi(
    req: operations.UpsertApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpsertApiRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpsertApiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.api = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpsertApiEndpoint - Upsert an ApiEndpoint.
  /** 
   * Upsert an ApiEndpoint. If the ApiEndpoint does not exist it will be created, otherwise it will be updated.
  **/
  UpsertApiEndpoint(
    req: operations.UpsertApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpsertApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpsertApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.apiEndpoint = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
