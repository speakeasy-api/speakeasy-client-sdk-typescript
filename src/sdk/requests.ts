import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Requests {
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
   * generateRequestPostmanCollection - Generate a Postman collection for a particular request.
   *
   * Generates a Postman collection for a particular request. 
   * Allowing it to be replayed with the same inputs that were captured by the SDK.
  **/
  generateRequestPostmanCollection(
    req: operations.GenerateRequestPostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateRequestPostmanCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateRequestPostmanCollectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/eventlog/{requestID}/generate/postman", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GenerateRequestPostmanCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postmanCollection = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRequestFromEventLog - Get information about a particular request.
  **/
  getRequestFromEventLog(
    req: operations.GetRequestFromEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRequestFromEventLogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRequestFromEventLogRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/eventlog/{requestID}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRequestFromEventLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.unboundedRequest = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * queryEventLog - Query the event log to retrieve a list of requests.
   *
   * Supports retrieving a list of request captured by the SDK for this workspace.
   * Allows the filtering of requests on a number of criteria such as ApiID, VersionID, Path, Method, etc.
  **/
  queryEventLog(
    req: operations.QueryEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryEventLogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QueryEventLogRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/eventlog/query";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.QueryEventLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.boundedRequests = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
