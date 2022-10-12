import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as shared from "./models/shared";
import * as operations from "./models/operations";


const Servers = [
	"http://api.prod.speakeasyapi.dev",
] as const;

export function WithServerURL(serverURL: string, params: Map<string, string>): Function {
  return function(sdk: SDK) {
    if (params != null) {
      serverURL = ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  }
}
export function WithSecurity(security: shared.Security): Function {
  return function(sdk: SDK) {
    sdk.securityClient = CreateSecurityClient(security);
  }
}

export class SDK {
  defaultClient: AxiosInstance;
  securityClient: AxiosInstance;
  serverURL: string;
  constructor(...opts: Function[]): SDK {
    this.serverURL = "";
    this.defaultClient = axios.create({baseURL: this.serverURL});
    this.securityClient = axios.create({baseURL: this.serverURL});
    opts.forEach(o => o(this));
	if (this.serverURL == "") {
		this.serverURL = Servers[0];
	}
  }
  
  DeleteApi = async (
    props: operations.DeleteApiRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DeleteApiResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DeleteApiResponse> | undefined = undefined;
    try {
        httpRes = await client.delete<
            operations.DeleteApiResponse,
            AxiosResponse<operations.DeleteApiResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.DeleteApiResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  DeleteApiEndpoint = async (
    props: operations.DeleteApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DeleteApiEndpointResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DeleteApiEndpointResponse> | undefined = undefined;
    try {
        httpRes = await client.delete<
            operations.DeleteApiEndpointResponse,
            AxiosResponse<operations.DeleteApiEndpointResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.DeleteApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  DeleteSchema = async (
    props: operations.DeleteSchemaRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DeleteSchemaResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DeleteSchemaResponse> | undefined = undefined;
    try {
        httpRes = await client.delete<
            operations.DeleteSchemaResponse,
            AxiosResponse<operations.DeleteSchemaResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.DeleteSchemaResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  DeleteVersionMetadata = async (
    props: operations.DeleteVersionMetadataRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DeleteVersionMetadataResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata/{metaKey}/{metaValue}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DeleteVersionMetadataResponse> | undefined = undefined;
    try {
        httpRes = await client.delete<
            operations.DeleteVersionMetadataResponse,
            AxiosResponse<operations.DeleteVersionMetadataResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.DeleteVersionMetadataResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  DownloadSchema = async (
    props: operations.DownloadSchemaRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DownloadSchemaResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/download", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DownloadSchemaResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.DownloadSchemaResponse,
            AxiosResponse<operations.DownloadSchemaResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.DownloadSchemaResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.Schema = httpRes.data;
                    break;
                case `application/x-yaml`:
                    res.Schema = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  DownloadSchemaRevision = async (
    props: operations.DownloadSchemaRevisionRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DownloadSchemaRevisionResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}/download", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DownloadSchemaRevisionResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.DownloadSchemaRevisionResponse,
            AxiosResponse<operations.DownloadSchemaRevisionResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.DownloadSchemaRevisionResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.Schema = httpRes.data;
                    break;
                case `application/x-yaml`:
                    res.Schema = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  FindApiEndpoint = async (
    props: operations.FindApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.FindApiEndpointResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.FindApiEndpointResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.FindApiEndpointResponse,
            AxiosResponse<operations.FindApiEndpointResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.FindApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.ApiEndpoint = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GenerateOpenApiSpec = async (
    props: operations.GenerateOpenApiSpecRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GenerateOpenApiSpecResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/generate/openapi", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GenerateOpenApiSpecResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GenerateOpenApiSpecResponse,
            AxiosResponse<operations.GenerateOpenApiSpecResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GenerateOpenApiSpecResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.GenerateOpenApiSpecDiff = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GenerateOpenApiSpecForApiEndpoint = async (
    props: operations.GenerateOpenApiSpecForApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GenerateOpenApiSpecForApiEndpointResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/openapi", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GenerateOpenApiSpecForApiEndpointResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GenerateOpenApiSpecForApiEndpointResponse,
            AxiosResponse<operations.GenerateOpenApiSpecForApiEndpointResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GenerateOpenApiSpecForApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.GenerateOpenApiSpecDiff = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GeneratePostmanCollection = async (
    props: operations.GeneratePostmanCollectionRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GeneratePostmanCollectionResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/generate/postman", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GeneratePostmanCollectionResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GeneratePostmanCollectionResponse,
            AxiosResponse<operations.GeneratePostmanCollectionResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GeneratePostmanCollectionResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.PostmanCollection = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GeneratePostmanCollectionForApiEndpoint = async (
    props: operations.GeneratePostmanCollectionForApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GeneratePostmanCollectionForApiEndpointResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GeneratePostmanCollectionForApiEndpointResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GeneratePostmanCollectionForApiEndpointResponse,
            AxiosResponse<operations.GeneratePostmanCollectionForApiEndpointResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GeneratePostmanCollectionForApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.PostmanCollection = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GenerateRequestPostmanCollection = async (
    props: operations.GenerateRequestPostmanCollectionRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GenerateRequestPostmanCollectionResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/eventlog/{requestID}/generate/postman", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GenerateRequestPostmanCollectionResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GenerateRequestPostmanCollectionResponse,
            AxiosResponse<operations.GenerateRequestPostmanCollectionResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GenerateRequestPostmanCollectionResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.PostmanCollection = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetAllApiEndpoints = async (
    props: operations.GetAllApiEndpointsRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetAllApiEndpointsResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/api_endpoints", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetAllApiEndpointsResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetAllApiEndpointsResponse,
            AxiosResponse<operations.GetAllApiEndpointsResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetAllApiEndpointsResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.ApiEndpoints = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetAllApiVersions = async (
    props: operations.GetAllApiVersionsRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetAllApiVersionsResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    
    const queryParams = GetQueryParams(props.QueryParams)
    

    let httpRes: AxiosResponse<operations.GetAllApiVersionsResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetAllApiVersionsResponse,
            AxiosResponse<operations.GetAllApiVersionsResponse>,
            unknown
        >(url, {
            params: queryParams,
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetAllApiVersionsResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.Apis = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetAllForVersionApiEndpoints = async (
    props: operations.GetAllForVersionApiEndpointsRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetAllForVersionApiEndpointsResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetAllForVersionApiEndpointsResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetAllForVersionApiEndpointsResponse,
            AxiosResponse<operations.GetAllForVersionApiEndpointsResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetAllForVersionApiEndpointsResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.ApiEndpoints = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetApiEndpoint = async (
    props: operations.GetApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetApiEndpointResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetApiEndpointResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetApiEndpointResponse,
            AxiosResponse<operations.GetApiEndpointResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.ApiEndpoint = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetApis = async (
    props: operations.GetApisRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetApisResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/apis";
    

    
    const client: AxiosInstance = this.securityClient;
    


    
    const queryParams = GetQueryParams(props.QueryParams)
    

    let httpRes: AxiosResponse<operations.GetApisResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetApisResponse,
            AxiosResponse<operations.GetApisResponse>,
            unknown
        >(url, {
            params: queryParams,
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetApisResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.Apis = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetEmbedAccessToken = async (
    props: operations.GetEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetEmbedAccessTokenResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-token";
    

    
    const client: AxiosInstance = this.securityClient;
    


    
    const queryParams = GetQueryParams(props.QueryParams)
    

    let httpRes: AxiosResponse<operations.GetEmbedAccessTokenResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetEmbedAccessTokenResponse,
            AxiosResponse<operations.GetEmbedAccessTokenResponse>,
            unknown
        >(url, {
            params: queryParams,
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetEmbedAccessTokenResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.EmbedAccessTokenResponse = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetRequestFromEventLog = async (
    props: operations.GetRequestFromEventLogRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetRequestFromEventLogResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/eventlog/{requestID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetRequestFromEventLogResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetRequestFromEventLogResponse,
            AxiosResponse<operations.GetRequestFromEventLogResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetRequestFromEventLogResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.UnboundedRequest = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetSchema = async (
    props: operations.GetSchemaRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetSchemaResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetSchemaResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetSchemaResponse,
            AxiosResponse<operations.GetSchemaResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetSchemaResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.Schema = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetSchemaDiff = async (
    props: operations.GetSchemaDiffRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetSchemaDiffResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{baseRevisionID}/diff/{targetRevisionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetSchemaDiffResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetSchemaDiffResponse,
            AxiosResponse<operations.GetSchemaDiffResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetSchemaDiffResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.SchemaDiff = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetSchemaRevision = async (
    props: operations.GetSchemaRevisionRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetSchemaRevisionResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetSchemaRevisionResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetSchemaRevisionResponse,
            AxiosResponse<operations.GetSchemaRevisionResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetSchemaRevisionResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.Schema = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetSchemas = async (
    props: operations.GetSchemasRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetSchemasResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schemas", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetSchemasResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetSchemasResponse,
            AxiosResponse<operations.GetSchemasResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetSchemasResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.Schemata = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetValidEmbedAccessTokens = async (
    
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetValidEmbedAccessTokensResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-tokens/valid";
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetValidEmbedAccessTokensResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetValidEmbedAccessTokensResponse,
            AxiosResponse<operations.GetValidEmbedAccessTokensResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetValidEmbedAccessTokensResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.EmbedTokens = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  GetVersionMetadata = async (
    props: operations.GetVersionMetadataRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetVersionMetadataResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetVersionMetadataResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.GetVersionMetadataResponse,
            AxiosResponse<operations.GetVersionMetadataResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.GetVersionMetadataResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.VersionMetadata = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  InsertVersionMetadata = async (
    props: operations.InsertVersionMetadataRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.InsertVersionMetadataResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", props.PathParams);
    
    try {
        let [bodyReader, reqContentType] = SerializeRequestBody(props);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error serializing request body", { cause: e });
        }
    }
    bodyReader ?? return new Error("request body is required");
    

    
    const client: AxiosInstance = this.securityClient;
    
    config?.headers?.['Content-Type'] = reqContentType;
    const headers = config?.headers ?? { 'Content-Type': reqContentType };


    

    let httpRes: AxiosResponse<operations.InsertVersionMetadataResponse> | undefined = undefined;
    try {
        httpRes = await client.post<
            operations.InsertVersionMetadataResponse,
            AxiosResponse<operations.InsertVersionMetadataResponse>,
            unknown
        >(url, {
            
            headers: headers,
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.InsertVersionMetadataResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.VersionMetadata = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  QueryEventLog = async (
    props: operations.QueryEventLogRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.QueryEventLogResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/eventlog/query";
    

    
    const client: AxiosInstance = this.securityClient;
    


    
    const queryParams = GetQueryParams(props.QueryParams)
    

    let httpRes: AxiosResponse<operations.QueryEventLogResponse> | undefined = undefined;
    try {
        httpRes = await client.get<
            operations.QueryEventLogResponse,
            AxiosResponse<operations.QueryEventLogResponse>,
            unknown
        >(url, {
            params: queryParams,
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.QueryEventLogResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.BoundedRequests = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  RegisterSchema = async (
    props: operations.RegisterSchemaRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.RegisterSchemaResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema", props.PathParams);
    
    try {
        let [bodyReader, reqContentType] = SerializeRequestBody(props);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error serializing request body", { cause: e });
        }
    }
    bodyReader ?? return new Error("request body is required");
    

    
    const client: AxiosInstance = this.securityClient;
    
    config?.headers?.['Content-Type'] = reqContentType;
    const headers = config?.headers ?? { 'Content-Type': reqContentType };


    

    let httpRes: AxiosResponse<operations.RegisterSchemaResponse> | undefined = undefined;
    try {
        httpRes = await client.post<
            operations.RegisterSchemaResponse,
            AxiosResponse<operations.RegisterSchemaResponse>,
            unknown
        >(url, {
            
            headers: headers,
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.RegisterSchemaResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  RevokeEmbedAccessToken = async (
    props: operations.RevokeEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.RevokeEmbedAccessTokenResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/workspace/embed-access-tokens/{tokenID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.RevokeEmbedAccessTokenResponse> | undefined = undefined;
    try {
        httpRes = await client.delete<
            operations.RevokeEmbedAccessTokenResponse,
            AxiosResponse<operations.RevokeEmbedAccessTokenResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.RevokeEmbedAccessTokenResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  UpsertApi = async (
    props: operations.UpsertApiRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.UpsertApiResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}", props.PathParams);
    
    try {
        let [bodyReader, reqContentType] = SerializeRequestBody(props);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error serializing request body", { cause: e });
        }
    }
    bodyReader ?? return new Error("request body is required");
    

    
    const client: AxiosInstance = this.securityClient;
    
    config?.headers?.['Content-Type'] = reqContentType;
    const headers = config?.headers ?? { 'Content-Type': reqContentType };


    

    let httpRes: AxiosResponse<operations.UpsertApiResponse> | undefined = undefined;
    try {
        httpRes = await client.put<
            operations.UpsertApiResponse,
            AxiosResponse<operations.UpsertApiResponse>,
            unknown
        >(url, {
            
            headers: headers,
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.UpsertApiResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.Api = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
  UpsertApiEndpoint = async (
    props: operations.UpsertApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.UpsertApiEndpointResponse> | Error> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", props.PathParams);
    
    try {
        let [bodyReader, reqContentType] = SerializeRequestBody(props);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error serializing request body", { cause: e });
        }
    }
    bodyReader ?? return new Error("request body is required");
    

    
    const client: AxiosInstance = this.securityClient;
    
    config?.headers?.['Content-Type'] = reqContentType;
    const headers = config?.headers ?? { 'Content-Type': reqContentType };


    

    let httpRes: AxiosResponse<operations.UpsertApiEndpointResponse> | undefined = undefined;
    try {
        httpRes = await client.put<
            operations.UpsertApiEndpointResponse,
            AxiosResponse<operations.UpsertApiEndpointResponse>,
            unknown
        >(url, {
            
            headers: headers,
            ...config,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return new Error("Error sending request", {cause: e});
        }
    }

    const contentType = httpRes?.headers?.getContentType;

	let res: operations.UpsertApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    res.ApiEndpoint = httpRes.data;
                    break;
            }
            break;
        default:
            switch (contentType) {
                case `application/json`:
                    res.Error = httpRes.data;
                    break;
            }
            break;
    }
    return res;
};

  
}

