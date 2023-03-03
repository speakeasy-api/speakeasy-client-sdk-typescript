import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class ApiEndpoints {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * deleteApiEndpoint - Delete an ApiEndpoint.
   *
   * Delete an ApiEndpoint. This will also delete all associated Request Logs (if using a Postgres datastore).
  **/
  deleteApiEndpoint(
    req: operations.DeleteApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiEndpointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url,
      method: "delete",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * findApiEndpoint - Find an ApiEndpoint via its displayName.
   *
   * Find an ApiEndpoint via its displayName (set by operationId from a registered OpenAPI schema).
   * This is useful for finding the ID of an ApiEndpoint to use in the /v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID} endpoints.
  **/
  findApiEndpoint(
    req: operations.FindApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindApiEndpointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FindApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.apiEndpoint = plainToInstance(
                shared.ApiEndpoint,
                httpRes?.data as shared.ApiEndpoint,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * generateOpenApiSpecForApiEndpoint - Generate an OpenAPI specification for a particular ApiEndpoint.
   *
   * This endpoint will generate a new operation in any registered OpenAPI document if the operation does not already exist in the document.
   * Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.
  **/
  generateOpenApiSpecForApiEndpoint(
    req: operations.GenerateOpenApiSpecForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateOpenApiSpecForApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateOpenApiSpecForApiEndpointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/openapi", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GenerateOpenApiSpecForApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.generateOpenApiSpecDiff = plainToInstance(
                shared.GenerateOpenApiSpecDiff,
                httpRes?.data as shared.GenerateOpenApiSpecDiff,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * generatePostmanCollectionForApiEndpoint - Generate a Postman collection for a particular ApiEndpoint.
   *
   * Generates a postman collection that allows the endpoint to be called from postman variables produced for any path/query/header parameters included in the OpenAPI document.
  **/
  generatePostmanCollectionForApiEndpoint(
    req: operations.GeneratePostmanCollectionForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeneratePostmanCollectionForApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GeneratePostmanCollectionForApiEndpointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GeneratePostmanCollectionForApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.postmanCollection = out;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAllApiEndpoints - Get all Api endpoints for a particular apiID.
  **/
  getAllApiEndpoints(
    req: operations.GetAllApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiEndpointsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllApiEndpointsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/api_endpoints", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllApiEndpointsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.apiEndpoints = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAllForVersionApiEndpoints - Get all ApiEndpoints for a particular apiID and versionID.
  **/
  getAllForVersionApiEndpoints(
    req: operations.GetAllForVersionApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllForVersionApiEndpointsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllForVersionApiEndpointsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllForVersionApiEndpointsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.apiEndpoints = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getApiEndpoint - Get an ApiEndpoint.
  **/
  getApiEndpoint(
    req: operations.GetApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiEndpointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.apiEndpoint = plainToInstance(
                shared.ApiEndpoint,
                httpRes?.data as shared.ApiEndpoint,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * upsertApiEndpoint - Upsert an ApiEndpoint.
   *
   * Upsert an ApiEndpoint. If the ApiEndpoint does not exist it will be created, otherwise it will be updated.
  **/
  upsertApiEndpoint(
    req: operations.UpsertApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpsertApiEndpointRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpsertApiEndpointResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.apiEndpoint = plainToInstance(
                shared.ApiEndpoint,
                httpRes?.data as shared.ApiEndpoint,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
