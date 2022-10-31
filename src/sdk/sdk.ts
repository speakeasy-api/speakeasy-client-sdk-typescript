import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import { CreateSecurityClient } from "../internal/utils/security";
import { Security } from "./models/shared";
import * as utils from "../internal/utils/utils";
import * as shared from "./models/shared";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';


const Servers = [
	"http://api.prod.speakeasyapi.dev",
] as const;

export function WithServerURL(serverURL: string, params?: Map<string, string>): Function {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
    sdk.defaultClient = axios.create({ baseURL: serverURL });
  }
}
export function WithSecurity(serverURL: string, security: Security): Function {
  return (sdk: SDK) => {
    sdk.serverURL = serverURL;
    sdk.securityClient = CreateSecurityClient(serverURL, security);
  }
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
  
  DeleteApi = (
    props: operations.DeleteApiRequest,
    config?: AxiosRequestConfig
): Promise<operations.DeleteApiResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.delete(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  DeleteApiEndpoint = (
    props: operations.DeleteApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<operations.DeleteApiEndpointResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.delete(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  DeleteSchema = (
    props: operations.DeleteSchemaRequest,
    config?: AxiosRequestConfig
): Promise<operations.DeleteSchemaResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.delete(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  DeleteVersionMetadata = (
    props: operations.DeleteVersionMetadataRequest,
    config?: AxiosRequestConfig
): Promise<operations.DeleteVersionMetadataResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata/{metaKey}/{metaValue}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.delete(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  DownloadSchema = (
    props: operations.DownloadSchemaRequest,
    config?: AxiosRequestConfig
): Promise<operations.DownloadSchemaResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/download", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  DownloadSchemaRevision = (
    props: operations.DownloadSchemaRevisionRequest,
    config?: AxiosRequestConfig
): Promise<operations.DownloadSchemaRevisionResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}/download", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  FindApiEndpoint = (
    props: operations.FindApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<operations.FindApiEndpointResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GenerateOpenApiSpec = (
    props: operations.GenerateOpenApiSpecRequest,
    config?: AxiosRequestConfig
): Promise<operations.GenerateOpenApiSpecResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/generate/openapi", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GenerateOpenApiSpecForApiEndpoint = (
    props: operations.GenerateOpenApiSpecForApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<operations.GenerateOpenApiSpecForApiEndpointResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/openapi", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GeneratePostmanCollection = (
    props: operations.GeneratePostmanCollectionRequest,
    config?: AxiosRequestConfig
): Promise<operations.GeneratePostmanCollectionResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/generate/postman", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GeneratePostmanCollectionForApiEndpoint = (
    props: operations.GeneratePostmanCollectionForApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<operations.GeneratePostmanCollectionForApiEndpointResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GenerateRequestPostmanCollection = (
    props: operations.GenerateRequestPostmanCollectionRequest,
    config?: AxiosRequestConfig
): Promise<operations.GenerateRequestPostmanCollectionResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/eventlog/{requestID}/generate/postman", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetAllApiEndpoints = (
    props: operations.GetAllApiEndpointsRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetAllApiEndpointsResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/api_endpoints", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetAllApiVersions = (
    props: operations.GetAllApiVersionsRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetAllApiVersionsResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(props.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
      paramsSerializer: qpSerializer,
    };
    

    

    return client.get(url, {
        
        ...requestConfig,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetAllForVersionApiEndpoints = (
    props: operations.GetAllForVersionApiEndpointsRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetAllForVersionApiEndpointsResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetApiEndpoint = (
    props: operations.GetApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetApiEndpointResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetApis = (
    props: operations.GetApisRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetApisResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/apis";
    

    
    const client: AxiosInstance = this.securityClient!;
    

    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(props.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
      paramsSerializer: qpSerializer,
    };
    

    

    return client.get(url, {
        
        ...requestConfig,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetEmbedAccessToken = (
    props: operations.GetEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetEmbedAccessTokenResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-token";
    

    
    const client: AxiosInstance = this.securityClient!;
    

    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(props.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
      paramsSerializer: qpSerializer,
    };
    

    

    return client.get(url, {
        
        ...requestConfig,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetRequestFromEventLog = (
    props: operations.GetRequestFromEventLogRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetRequestFromEventLogResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/eventlog/{requestID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetSchema = (
    props: operations.GetSchemaRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetSchemaResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetSchemaDiff = (
    props: operations.GetSchemaDiffRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetSchemaDiffResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{baseRevisionID}/diff/{targetRevisionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetSchemaRevision = (
    props: operations.GetSchemaRevisionRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetSchemaRevisionResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetSchemas = (
    props: operations.GetSchemasRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetSchemasResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schemas", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetValidEmbedAccessTokens = (
    
    config?: AxiosRequestConfig
): Promise<operations.GetValidEmbedAccessTokensResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-tokens/valid";
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  GetVersionMetadata = (
    props: operations.GetVersionMetadataRequest,
    config?: AxiosRequestConfig
): Promise<operations.GetVersionMetadataResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.get(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  InsertVersionMetadata = (
    props: operations.InsertVersionMetadataRequest,
    config?: AxiosRequestConfig
): Promise<operations.InsertVersionMetadataResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", props.PathParams);
    
    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(props);
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
    

    return client.post(url, body, {
        headers: headers,
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  QueryEventLog = (
    props: operations.QueryEventLogRequest,
    config?: AxiosRequestConfig
): Promise<operations.QueryEventLogResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/eventlog/query";
    

    
    const client: AxiosInstance = this.securityClient!;
    

    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(props.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
      paramsSerializer: qpSerializer,
    };
    

    

    return client.get(url, {
        
        ...requestConfig,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  RegisterSchema = (
    props: operations.RegisterSchemaRequest,
    config?: AxiosRequestConfig
): Promise<operations.RegisterSchemaResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema", props.PathParams);
    
    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(props);
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
    

    return client.post(url, body, {
        headers: headers,
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  RevokeEmbedAccessToken = (
    props: operations.RevokeEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
): Promise<operations.RevokeEmbedAccessTokenResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/workspace/embed-access-tokens/{tokenID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient!;
    

    

    

    return client.delete(url, {
        
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  UpsertApi = (
    props: operations.UpsertApiRequest,
    config?: AxiosRequestConfig
): Promise<operations.UpsertApiResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}", props.PathParams);
    
    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(props);
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
    

    return client.put(url, body, {
        headers: headers,
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
  UpsertApiEndpoint = (
    props: operations.UpsertApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<operations.UpsertApiEndpointResponse | AxiosError> => {
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", props.PathParams);
    
    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(props);
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
    

    return client.put(url, body, {
        headers: headers,
        ...config,
    }).then((httpRes: AxiosResponse) => {

    const contentType: string = httpRes?.headers?.["Content-Type"] ?? "";

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
    }).catch((error: AxiosError) => {return error});
};

  
}

