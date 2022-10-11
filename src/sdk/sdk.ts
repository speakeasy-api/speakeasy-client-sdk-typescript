import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as shared from "./models/shared";


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
export function WithSecurity(security: Security): Function {
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
): Promise<AxiosResponse<operations.DeleteApiResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DeleteApiResponse>
    try {
        httpRes = await client.delete<
            operations.DeleteApiResponse,
            AxiosResponse<operations.DeleteApiResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: DeleteApiResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  DeleteApiEndpoint = async (
    props: operations.DeleteApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DeleteApiEndpointResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DeleteApiEndpointResponse>
    try {
        httpRes = await client.delete<
            operations.DeleteApiEndpointResponse,
            AxiosResponse<operations.DeleteApiEndpointResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: DeleteApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  DeleteSchema = async (
    props: operations.DeleteSchemaRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DeleteSchemaResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DeleteSchemaResponse>
    try {
        httpRes = await client.delete<
            operations.DeleteSchemaResponse,
            AxiosResponse<operations.DeleteSchemaResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: DeleteSchemaResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  DeleteVersionMetadata = async (
    props: operations.DeleteVersionMetadataRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DeleteVersionMetadataResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata/{metaKey}/{metaValue}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DeleteVersionMetadataResponse>
    try {
        httpRes = await client.delete<
            operations.DeleteVersionMetadataResponse,
            AxiosResponse<operations.DeleteVersionMetadataResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: DeleteVersionMetadataResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  DownloadSchema = async (
    props: operations.DownloadSchemaRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DownloadSchemaResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/download", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DownloadSchemaResponse>
    try {
        httpRes = await client.get<
            operations.DownloadSchemaResponse,
            AxiosResponse<operations.DownloadSchemaResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: DownloadSchemaResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: string
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Schema = out
                case `application/x-yaml`:
                    res.Schema = httpRes.data
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  DownloadSchemaRevision = async (
    props: operations.DownloadSchemaRevisionRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.DownloadSchemaRevisionResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}/download", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.DownloadSchemaRevisionResponse>
    try {
        httpRes = await client.get<
            operations.DownloadSchemaRevisionResponse,
            AxiosResponse<operations.DownloadSchemaRevisionResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: DownloadSchemaRevisionResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: string
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Schema = out
                case `application/x-yaml`:
                    res.Schema = httpRes.data
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  FindApiEndpoint = async (
    props: operations.FindApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.FindApiEndpointResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.FindApiEndpointResponse>
    try {
        httpRes = await client.get<
            operations.FindApiEndpointResponse,
            AxiosResponse<operations.FindApiEndpointResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: FindApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.ApiEndpoint
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.ApiEndpoint = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GenerateOpenApiSpec = async (
    props: operations.GenerateOpenApiSpecRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GenerateOpenApiSpecResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/generate/openapi", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GenerateOpenApiSpecResponse>
    try {
        httpRes = await client.get<
            operations.GenerateOpenApiSpecResponse,
            AxiosResponse<operations.GenerateOpenApiSpecResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GenerateOpenApiSpecResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.GenerateOpenApiSpecDiff
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.GenerateOpenApiSpecDiff = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GenerateOpenApiSpecForApiEndpoint = async (
    props: operations.GenerateOpenApiSpecForApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GenerateOpenApiSpecForApiEndpointResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/openapi", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GenerateOpenApiSpecForApiEndpointResponse>
    try {
        httpRes = await client.get<
            operations.GenerateOpenApiSpecForApiEndpointResponse,
            AxiosResponse<operations.GenerateOpenApiSpecForApiEndpointResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GenerateOpenApiSpecForApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.GenerateOpenApiSpecDiff
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.GenerateOpenApiSpecDiff = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GeneratePostmanCollection = async (
    props: operations.GeneratePostmanCollectionRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GeneratePostmanCollectionResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/generate/postman", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GeneratePostmanCollectionResponse>
    try {
        httpRes = await client.get<
            operations.GeneratePostmanCollectionResponse,
            AxiosResponse<operations.GeneratePostmanCollectionResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GeneratePostmanCollectionResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: string
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.PostmanCollection = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GeneratePostmanCollectionForApiEndpoint = async (
    props: operations.GeneratePostmanCollectionForApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GeneratePostmanCollectionForApiEndpointResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GeneratePostmanCollectionForApiEndpointResponse>
    try {
        httpRes = await client.get<
            operations.GeneratePostmanCollectionForApiEndpointResponse,
            AxiosResponse<operations.GeneratePostmanCollectionForApiEndpointResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GeneratePostmanCollectionForApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: string
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.PostmanCollection = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GenerateRequestPostmanCollection = async (
    props: operations.GenerateRequestPostmanCollectionRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GenerateRequestPostmanCollectionResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/eventlog/{requestID}/generate/postman", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GenerateRequestPostmanCollectionResponse>
    try {
        httpRes = await client.get<
            operations.GenerateRequestPostmanCollectionResponse,
            AxiosResponse<operations.GenerateRequestPostmanCollectionResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GenerateRequestPostmanCollectionResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: string
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.PostmanCollection = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetAllApiEndpoints = async (
    props: operations.GetAllApiEndpointsRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetAllApiEndpointsResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/api_endpoints", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetAllApiEndpointsResponse>
    try {
        httpRes = await client.get<
            operations.GetAllApiEndpointsResponse,
            AxiosResponse<operations.GetAllApiEndpointsResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetAllApiEndpointsResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.ApiEndpoint[]
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.ApiEndpoints = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetAllApiVersions = async (
    props: operations.GetAllApiVersionsRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetAllApiVersionsResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    
    const queryParams = GetQueryParams(props.QueryParams)
    

    let httpRes: AxiosResponse<operations.GetAllApiVersionsResponse>
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
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetAllApiVersionsResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Api[]
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Apis = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetAllForVersionApiEndpoints = async (
    props: operations.GetAllForVersionApiEndpointsRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetAllForVersionApiEndpointsResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetAllForVersionApiEndpointsResponse>
    try {
        httpRes = await client.get<
            operations.GetAllForVersionApiEndpointsResponse,
            AxiosResponse<operations.GetAllForVersionApiEndpointsResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetAllForVersionApiEndpointsResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.ApiEndpoint[]
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.ApiEndpoints = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetApiEndpoint = async (
    props: operations.GetApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetApiEndpointResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetApiEndpointResponse>
    try {
        httpRes = await client.get<
            operations.GetApiEndpointResponse,
            AxiosResponse<operations.GetApiEndpointResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.ApiEndpoint
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.ApiEndpoint = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetApis = async (
    props: operations.GetApisRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetApisResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/apis";
    

    
    const client: AxiosInstance = this.securityClient;
    


    
    const queryParams = GetQueryParams(props.QueryParams)
    

    let httpRes: AxiosResponse<operations.GetApisResponse>
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
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetApisResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Api[]
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Apis = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetEmbedAccessToken = async (
    props: operations.GetEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetEmbedAccessTokenResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-token";
    

    
    const client: AxiosInstance = this.securityClient;
    


    
    const queryParams = GetQueryParams(props.QueryParams)
    

    let httpRes: AxiosResponse<operations.GetEmbedAccessTokenResponse>
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
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetEmbedAccessTokenResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.EmbedAccessTokenResponse
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.EmbedAccessTokenResponse = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetRequestFromEventLog = async (
    props: operations.GetRequestFromEventLogRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetRequestFromEventLogResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/eventlog/{requestID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetRequestFromEventLogResponse>
    try {
        httpRes = await client.get<
            operations.GetRequestFromEventLogResponse,
            AxiosResponse<operations.GetRequestFromEventLogResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetRequestFromEventLogResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.UnboundedRequest
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.UnboundedRequest = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetSchema = async (
    props: operations.GetSchemaRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetSchemaResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetSchemaResponse>
    try {
        httpRes = await client.get<
            operations.GetSchemaResponse,
            AxiosResponse<operations.GetSchemaResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetSchemaResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Schema
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Schema = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetSchemaDiff = async (
    props: operations.GetSchemaDiffRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetSchemaDiffResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{baseRevisionID}/diff/{targetRevisionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetSchemaDiffResponse>
    try {
        httpRes = await client.get<
            operations.GetSchemaDiffResponse,
            AxiosResponse<operations.GetSchemaDiffResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetSchemaDiffResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.SchemaDiff
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.SchemaDiff = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetSchemaRevision = async (
    props: operations.GetSchemaRevisionRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetSchemaRevisionResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetSchemaRevisionResponse>
    try {
        httpRes = await client.get<
            operations.GetSchemaRevisionResponse,
            AxiosResponse<operations.GetSchemaRevisionResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetSchemaRevisionResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Schema
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Schema = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetSchemas = async (
    props: operations.GetSchemasRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetSchemasResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schemas", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetSchemasResponse>
    try {
        httpRes = await client.get<
            operations.GetSchemasResponse,
            AxiosResponse<operations.GetSchemasResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetSchemasResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Schema[]
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Schemata = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetValidEmbedAccessTokens = async (
    
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetValidEmbedAccessTokensResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-tokens/valid";
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetValidEmbedAccessTokensResponse>
    try {
        httpRes = await client.get<
            operations.GetValidEmbedAccessTokensResponse,
            AxiosResponse<operations.GetValidEmbedAccessTokensResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetValidEmbedAccessTokensResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.EmbedToken[]
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.EmbedTokens = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  GetVersionMetadata = async (
    props: operations.GetVersionMetadataRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.GetVersionMetadataResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.GetVersionMetadataResponse>
    try {
        httpRes = await client.get<
            operations.GetVersionMetadataResponse,
            AxiosResponse<operations.GetVersionMetadataResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: GetVersionMetadataResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.VersionMetadata[]
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.VersionMetadata = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  InsertVersionMetadata = async (
    props: operations.InsertVersionMetadataRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.InsertVersionMetadataResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/metadata", props.PathParams);
    
    try {
        let [bodyReader, reqContentType] = SerializeRequestBody(props);
    } catch (e: unknown) {
        return new Error("Error serializing request body", { cause: e });
    }
    bodyReader ?? return new Error("request body is required");
    

    
    const client: AxiosInstance = this.securityClient;
    
    config?.headers?.['Content-Type'] = reqContentType;
    const headers = config?.headers ?? { 'Content-Type': reqContentType };


    

    let httpRes: AxiosResponse<operations.InsertVersionMetadataResponse>
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
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: InsertVersionMetadataResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.VersionMetadata
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.VersionMetadata = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  QueryEventLog = async (
    props: operations.QueryEventLogRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.QueryEventLogResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/eventlog/query";
    

    
    const client: AxiosInstance = this.securityClient;
    


    
    const queryParams = GetQueryParams(props.QueryParams)
    

    let httpRes: AxiosResponse<operations.QueryEventLogResponse>
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
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: QueryEventLogResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.BoundedRequest[]
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.BoundedRequests = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  RegisterSchema = async (
    props: operations.RegisterSchemaRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.RegisterSchemaResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/schema", props.PathParams);
    
    try {
        let [bodyReader, reqContentType] = SerializeRequestBody(props);
    } catch (e: unknown) {
        return new Error("Error serializing request body", { cause: e });
    }
    bodyReader ?? return new Error("request body is required");
    

    
    const client: AxiosInstance = this.securityClient;
    
    config?.headers?.['Content-Type'] = reqContentType;
    const headers = config?.headers ?? { 'Content-Type': reqContentType };


    

    let httpRes: AxiosResponse<operations.RegisterSchemaResponse>
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
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: RegisterSchemaResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  RevokeEmbedAccessToken = async (
    props: operations.RevokeEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.RevokeEmbedAccessTokenResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/workspace/embed-access-tokens/{tokenID}", props.PathParams);
    

    
    const client: AxiosInstance = this.securityClient;
    


    

    let httpRes: AxiosResponse<operations.RevokeEmbedAccessTokenResponse>
    try {
        httpRes = await client.delete<
            operations.RevokeEmbedAccessTokenResponse,
            AxiosResponse<operations.RevokeEmbedAccessTokenResponse>,
            unknown
        >(url, {
            
            
            ...config,
        });
    } catch (e: unknown) {
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: RevokeEmbedAccessTokenResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  UpsertApi = async (
    props: operations.UpsertApiRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.UpsertApiResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}", props.PathParams);
    
    try {
        let [bodyReader, reqContentType] = SerializeRequestBody(props);
    } catch (e: unknown) {
        return new Error("Error serializing request body", { cause: e });
    }
    bodyReader ?? return new Error("request body is required");
    

    
    const client: AxiosInstance = this.securityClient;
    
    config?.headers?.['Content-Type'] = reqContentType;
    const headers = config?.headers ?? { 'Content-Type': reqContentType };


    

    let httpRes: AxiosResponse<operations.UpsertApiResponse>
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
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: UpsertApiResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Api
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Api = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
  UpsertApiEndpoint = async (
    props: operations.UpsertApiEndpointRequest,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<operations.UpsertApiEndpointResponse>> => {
    let baseURL: string = props.ServerURL ?? this.serverURL;
    const url: string = GenerateURL(baseURL, "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}", props.PathParams);
    
    try {
        let [bodyReader, reqContentType] = SerializeRequestBody(props);
    } catch (e: unknown) {
        return new Error("Error serializing request body", { cause: e });
    }
    bodyReader ?? return new Error("request body is required");
    

    
    const client: AxiosInstance = this.securityClient;
    
    config?.headers?.['Content-Type'] = reqContentType;
    const headers = config?.headers ?? { 'Content-Type': reqContentType };


    

    let httpRes: AxiosResponse<operations.UpsertApiEndpointResponse>
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
        return new Error("Error sending request", {cause: e});
    }

    const contentType = httpRes.headers?.["Content-Type"];

	let res: UpsertApiEndpointResponse = {
		StatusCode: httpRes.status,
        ContentType: contentType,
	}
    switch (httpRes.status) {
        case 200:
            switch (contentType) {
                case `application/json`:
                    let out: shared.ApiEndpoint
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.ApiEndpoint = out
            }
        default:
            switch (contentType) {
                case `application/json`:
                    let out: shared.Error
                    try {
                        out = UnmarshalJsonFromResponseBody(httpRes.data, out)
                    } catch (e: unknown) {
                        return new Error("Error unmarshaling response body JSON", {cause: e});
                    }

                    res.Error = out
            }
    }
    return res;
});

  
}

