import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Metadata {
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
   * deleteVersionMetadata - Delete metadata for a particular apiID and versionID.
  **/
  deleteVersionMetadata(
    req: operations.DeleteVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVersionMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVersionMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata/{metaKey}/{metaValue}", req.pathParams);
    
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
        const res: operations.DeleteVersionMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * getVersionMetadata - Get all metadata for a particular apiID and versionID.
  **/
  getVersionMetadata(
    req: operations.GetVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVersionMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", req.pathParams);
    
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
        const res: operations.GetVersionMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.versionMetadata = httpRes?.data;
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
   * insertVersionMetadata - Insert metadata for a particular apiID and versionID.
  **/
  insertVersionMetadata(
    req: operations.InsertVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InsertVersionMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InsertVersionMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", req.pathParams);

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
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InsertVersionMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.versionMetadata = httpRes?.data;
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
