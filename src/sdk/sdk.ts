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
  
  DeleteApi(
    req: operations.DeleteApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteApiResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  DeleteApiEndpoint(
    req: operations.DeleteApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiEndpointResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteApiEndpointResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  DeleteSchema(
    req: operations.DeleteSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSchemaResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSchemaResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  DeleteVersionMetadata(
    req: operations.DeleteVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVersionMetadataResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVersionMetadataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata/{metaKey}/{metaValue}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteVersionMetadataResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  DownloadSchema(
    req: operations.DownloadSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSchemaResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/download", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DownloadSchemaResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.Schema = httpRes?.data;
            if (MatchContentType(contentType, "application/json")) res.Schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  DownloadSchemaRevision(
    req: operations.DownloadSchemaRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSchemaRevisionResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadSchemaRevisionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}/download", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DownloadSchemaRevisionResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.Schema = httpRes?.data;
            if (MatchContentType(contentType, "application/json")) res.Schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  FindApiEndpoint(
    req: operations.FindApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindApiEndpointResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FindApiEndpointResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.ApiEndpoint = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GenerateOpenApiSpec(
    req: operations.GenerateOpenApiSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateOpenApiSpecResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateOpenApiSpecRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/generate/openapi", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GenerateOpenApiSpecResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.GenerateOpenApiSpecDiff = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GenerateOpenApiSpecForApiEndpoint(
    req: operations.GenerateOpenApiSpecForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateOpenApiSpecForApiEndpointResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateOpenApiSpecForApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/openapi", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GenerateOpenApiSpecForApiEndpointResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.GenerateOpenApiSpecDiff = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GeneratePostmanCollection(
    req: operations.GeneratePostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeneratePostmanCollectionResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GeneratePostmanCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/generate/postman", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GeneratePostmanCollectionResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.PostmanCollection = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GeneratePostmanCollectionForApiEndpoint(
    req: operations.GeneratePostmanCollectionForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeneratePostmanCollectionForApiEndpointResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GeneratePostmanCollectionForApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GeneratePostmanCollectionForApiEndpointResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.PostmanCollection = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GenerateRequestPostmanCollection(
    req: operations.GenerateRequestPostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateRequestPostmanCollectionResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateRequestPostmanCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/eventlog/{requestID}/generate/postman", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GenerateRequestPostmanCollectionResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.PostmanCollection = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetAllApiEndpoints(
    req: operations.GetAllApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiEndpointsResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllApiEndpointsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/api_endpoints", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllApiEndpointsResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.ApiEndpoints = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetAllApiVersions(
    req: operations.GetAllApiVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiVersionsResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllApiVersionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.QueryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllApiVersionsResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.Apis = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetAllForVersionApiEndpoints(
    req: operations.GetAllForVersionApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllForVersionApiEndpointsResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllForVersionApiEndpointsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllForVersionApiEndpointsResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.ApiEndpoints = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetApiEndpoint(
    req: operations.GetApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiEndpointResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiEndpointResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.ApiEndpoint = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetApis(
    req: operations.GetApisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApisResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApisRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/apis";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.QueryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApisResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.Apis = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetEmbedAccessToken(
    req: operations.GetEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEmbedAccessTokenResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEmbedAccessTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-token";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.QueryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEmbedAccessTokenResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.EmbedAccessTokenResponse = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetRequestFromEventLog(
    req: operations.GetRequestFromEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRequestFromEventLogResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRequestFromEventLogRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/eventlog/{requestID}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRequestFromEventLogResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.UnboundedRequest = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetSchema(
    req: operations.GetSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchemaResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.Schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetSchemaDiff(
    req: operations.GetSchemaDiffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaDiffResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchemaDiffRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{baseRevisionID}/diff/{targetRevisionID}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchemaDiffResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.SchemaDiff = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetSchemaRevision(
    req: operations.GetSchemaRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaRevisionResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchemaRevisionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchemaRevisionResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.Schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetSchemas(
    req: operations.GetSchemasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemasResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchemasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schemas", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchemasResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.Schemata = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetValidEmbedAccessTokens(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetValidEmbedAccessTokensResponse | AxiosError> {
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
        let res: operations.GetValidEmbedAccessTokensResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.EmbedTokens = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  GetVersionMetadata(
    req: operations.GetVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionMetadataResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVersionMetadataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVersionMetadataResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.VersionMetadata = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  InsertVersionMetadata(
    req: operations.InsertVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InsertVersionMetadataResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InsertVersionMetadataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", req.PathParams);
    
    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;
    const headers = { ...reqHeaders, ...config?.headers};
    
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
        let res: operations.InsertVersionMetadataResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.VersionMetadata = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  QueryEventLog(
    req: operations.QueryEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryEventLogResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QueryEventLogRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/eventlog/query";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.QueryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.QueryEventLogResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.BoundedRequests = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  RegisterSchema(
    req: operations.RegisterSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegisterSchemaResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegisterSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema", req.PathParams);
    
    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;
    const headers = { ...reqHeaders, ...config?.headers};
    
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
        let res: operations.RegisterSchemaResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  RevokeEmbedAccessToken(
    req: operations.RevokeEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeEmbedAccessTokenResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeEmbedAccessTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/workspace/embed-access-tokens/{tokenID}", req.PathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RevokeEmbedAccessTokenResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  UpsertApi(
    req: operations.UpsertApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpsertApiRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}", req.PathParams);
    
    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;
    const headers = { ...reqHeaders, ...config?.headers};
    
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
        let res: operations.UpsertApiResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.Api = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
  
  UpsertApiEndpoint(
    req: operations.UpsertApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiEndpointResponse | AxiosError> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpsertApiEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", req.PathParams);
    
    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;
    const headers = { ...reqHeaders, ...config?.headers};
    
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
        let res: operations.UpsertApiEndpointResponse = {StatusCode: httpRes.status, ContentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json")) res.ApiEndpoint = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json")) res.Error = httpRes?.data;
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {return error});
  }
}