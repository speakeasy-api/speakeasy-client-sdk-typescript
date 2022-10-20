import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { CreateSecurityClient } from "../internal/utils/security";
import { Security } from "./models/shared";
import * as utils from "../internal/utils/utils";
import * as shared from "./models/shared";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from "form-data";

const Servers = ["http://api.prod.speakeasyapi.dev"] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): Function {
  return function (sdk: SDK) {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
    sdk.defaultClient = axios.create({ baseURL: serverURL });
  };
}
export function WithSecurity(serverURL: string, security: Security): Function {
  return function (sdk: SDK) {
    sdk.serverURL = serverURL;
    sdk.securityClient = CreateSecurityClient(serverURL, security);
  };
}

export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  serverURL?: string;
  constructor(...opts: Function[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }
  }

  DeleteApi = async (
    props: operations.DeleteApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes: AxiosResponse<operations.DeleteApiResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.delete<
        operations.DeleteApiResponse,
        AxiosResponse<operations.DeleteApiResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.DeleteApiResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  DeleteApiEndpoint = async (
    props: operations.DeleteApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiEndpointResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.DeleteApiEndpointResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.delete<
        operations.DeleteApiEndpointResponse,
        AxiosResponse<operations.DeleteApiEndpointResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.DeleteApiEndpointResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  DeleteSchema = async (
    props: operations.DeleteSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSchemaResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes: AxiosResponse<operations.DeleteSchemaResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.delete<
        operations.DeleteSchemaResponse,
        AxiosResponse<operations.DeleteSchemaResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.DeleteSchemaResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  DeleteVersionMetadata = async (
    props: operations.DeleteVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVersionMetadataResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/metadata/{metaKey}/{metaValue}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.DeleteVersionMetadataResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.delete<
        operations.DeleteVersionMetadataResponse,
        AxiosResponse<operations.DeleteVersionMetadataResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.DeleteVersionMetadataResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  DownloadSchema = async (
    props: operations.DownloadSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSchemaResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema/download",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes: AxiosResponse<operations.DownloadSchemaResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.get<
        operations.DownloadSchemaResponse,
        AxiosResponse<operations.DownloadSchemaResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.DownloadSchemaResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
        if (contentType.includes("application/x-yaml")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  DownloadSchemaRevision = async (
    props: operations.DownloadSchemaRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSchemaRevisionResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}/download",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.DownloadSchemaRevisionResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.DownloadSchemaRevisionResponse,
        AxiosResponse<operations.DownloadSchemaRevisionResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.DownloadSchemaRevisionResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
        if (contentType.includes("application/x-yaml")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  FindApiEndpoint = async (
    props: operations.FindApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindApiEndpointResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes: AxiosResponse<operations.FindApiEndpointResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.get<
        operations.FindApiEndpointResponse,
        AxiosResponse<operations.FindApiEndpointResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.FindApiEndpointResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GenerateOpenApiSpec = async (
    props: operations.GenerateOpenApiSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateOpenApiSpecResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/generate/openapi",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GenerateOpenApiSpecResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GenerateOpenApiSpecResponse,
        AxiosResponse<operations.GenerateOpenApiSpecResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GenerateOpenApiSpecResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GenerateOpenApiSpecForApiEndpoint = async (
    props: operations.GenerateOpenApiSpecForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateOpenApiSpecForApiEndpointResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/openapi",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GenerateOpenApiSpecForApiEndpointResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GenerateOpenApiSpecForApiEndpointResponse,
        AxiosResponse<operations.GenerateOpenApiSpecForApiEndpointResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GenerateOpenApiSpecForApiEndpointResponse | undefined =
      undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GeneratePostmanCollection = async (
    props: operations.GeneratePostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeneratePostmanCollectionResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/generate/postman",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GeneratePostmanCollectionResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GeneratePostmanCollectionResponse,
        AxiosResponse<operations.GeneratePostmanCollectionResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GeneratePostmanCollectionResponse | undefined =
      undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GeneratePostmanCollectionForApiEndpoint = async (
    props: operations.GeneratePostmanCollectionForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<
    operations.GeneratePostmanCollectionForApiEndpointResponse | Error
  > => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GeneratePostmanCollectionForApiEndpointResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GeneratePostmanCollectionForApiEndpointResponse,
        AxiosResponse<operations.GeneratePostmanCollectionForApiEndpointResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res:
      | operations.GeneratePostmanCollectionForApiEndpointResponse
      | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GenerateRequestPostmanCollection = async (
    props: operations.GenerateRequestPostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateRequestPostmanCollectionResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/eventlog/{requestID}/generate/postman",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GenerateRequestPostmanCollectionResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GenerateRequestPostmanCollectionResponse,
        AxiosResponse<operations.GenerateRequestPostmanCollectionResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GenerateRequestPostmanCollectionResponse | undefined =
      undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetAllApiEndpoints = async (
    props: operations.GetAllApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiEndpointsResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/api_endpoints",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GetAllApiEndpointsResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GetAllApiEndpointsResponse,
        AxiosResponse<operations.GetAllApiEndpointsResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetAllApiEndpointsResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetAllApiVersions = async (
    props: operations.GetAllApiVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiVersionsResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const qpSerializer: ParamsSerializerOptions | undefined =
      GetQueryParamSerializer(props.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
    };
    if (qpSerializer != null) requestConfig.paramsSerializer = qpSerializer;

    let httpRes:
      | AxiosResponse<operations.GetAllApiVersionsResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GetAllApiVersionsResponse,
        AxiosResponse<operations.GetAllApiVersionsResponse>,
        unknown
      >(url, {
        ...requestConfig,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetAllApiVersionsResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetAllForVersionApiEndpoints = async (
    props: operations.GetAllForVersionApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllForVersionApiEndpointsResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GetAllForVersionApiEndpointsResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GetAllForVersionApiEndpointsResponse,
        AxiosResponse<operations.GetAllForVersionApiEndpointsResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetAllForVersionApiEndpointsResponse | undefined =
      undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetApiEndpoint = async (
    props: operations.GetApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiEndpointResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes: AxiosResponse<operations.GetApiEndpointResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.get<
        operations.GetApiEndpointResponse,
        AxiosResponse<operations.GetApiEndpointResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetApiEndpointResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetApis = async (
    props: operations.GetApisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApisResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/apis";

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const qpSerializer: ParamsSerializerOptions | undefined =
      GetQueryParamSerializer(props.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
    };
    if (qpSerializer != null) requestConfig.paramsSerializer = qpSerializer;

    let httpRes: AxiosResponse<operations.GetApisResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.get<
        operations.GetApisResponse,
        AxiosResponse<operations.GetApisResponse>,
        unknown
      >(url, {
        ...requestConfig,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetApisResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetEmbedAccessToken = async (
    props: operations.GetEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEmbedAccessTokenResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-token";

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const qpSerializer: ParamsSerializerOptions | undefined =
      GetQueryParamSerializer(props.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
    };
    if (qpSerializer != null) requestConfig.paramsSerializer = qpSerializer;

    let httpRes:
      | AxiosResponse<operations.GetEmbedAccessTokenResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GetEmbedAccessTokenResponse,
        AxiosResponse<operations.GetEmbedAccessTokenResponse>,
        unknown
      >(url, {
        ...requestConfig,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetEmbedAccessTokenResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetRequestFromEventLog = async (
    props: operations.GetRequestFromEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRequestFromEventLogResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/eventlog/{requestID}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GetRequestFromEventLogResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GetRequestFromEventLogResponse,
        AxiosResponse<operations.GetRequestFromEventLogResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetRequestFromEventLogResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetSchema = async (
    props: operations.GetSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes: AxiosResponse<operations.GetSchemaResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.get<
        operations.GetSchemaResponse,
        AxiosResponse<operations.GetSchemaResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetSchemaResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetSchemaDiff = async (
    props: operations.GetSchemaDiffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaDiffResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema/{baseRevisionID}/diff/{targetRevisionID}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes: AxiosResponse<operations.GetSchemaDiffResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.get<
        operations.GetSchemaDiffResponse,
        AxiosResponse<operations.GetSchemaDiffResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetSchemaDiffResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetSchemaRevision = async (
    props: operations.GetSchemaRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaRevisionResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GetSchemaRevisionResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GetSchemaRevisionResponse,
        AxiosResponse<operations.GetSchemaRevisionResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetSchemaRevisionResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetSchemas = async (
    props: operations.GetSchemasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemasResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schemas",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes: AxiosResponse<operations.GetSchemasResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.get<
        operations.GetSchemasResponse,
        AxiosResponse<operations.GetSchemasResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetSchemasResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetValidEmbedAccessTokens = async (
    config?: AxiosRequestConfig
  ): Promise<operations.GetValidEmbedAccessTokensResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-tokens/valid";

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GetValidEmbedAccessTokensResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GetValidEmbedAccessTokensResponse,
        AxiosResponse<operations.GetValidEmbedAccessTokensResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetValidEmbedAccessTokensResponse | undefined =
      undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  GetVersionMetadata = async (
    props: operations.GetVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionMetadataResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/metadata",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.GetVersionMetadataResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.get<
        operations.GetVersionMetadataResponse,
        AxiosResponse<operations.GetVersionMetadataResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.GetVersionMetadataResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  InsertVersionMetadata = async (
    props: operations.InsertVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InsertVersionMetadataResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/metadata",
      props.PathParams
    );

    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(props);
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;
    const headers = { ...reqHeaders, ...config?.headers };

    let httpRes:
      | AxiosResponse<operations.InsertVersionMetadataResponse>
      | undefined = undefined;
    try {
      let body: unknown;
      if (reqBody instanceof FormData) body = reqBody;
      else body = { ...reqBody };
      httpRes = await client!.post<
        operations.InsertVersionMetadataResponse,
        AxiosResponse<operations.InsertVersionMetadataResponse>,
        unknown
      >(url, body, {
        headers: headers,
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.InsertVersionMetadataResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  QueryEventLog = async (
    props: operations.QueryEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryEventLogResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/eventlog/query";

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const qpSerializer: ParamsSerializerOptions | undefined =
      GetQueryParamSerializer(props.QueryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
    };
    if (qpSerializer != null) requestConfig.paramsSerializer = qpSerializer;

    let httpRes: AxiosResponse<operations.QueryEventLogResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.get<
        operations.QueryEventLogResponse,
        AxiosResponse<operations.QueryEventLogResponse>,
        unknown
      >(url, {
        ...requestConfig,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.QueryEventLogResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  RegisterSchema = async (
    props: operations.RegisterSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegisterSchemaResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema",
      props.PathParams
    );

    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(props);
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;
    const headers = { ...reqHeaders, ...config?.headers };

    let httpRes: AxiosResponse<operations.RegisterSchemaResponse> | undefined =
      undefined;
    try {
      let body: unknown;
      if (reqBody instanceof FormData) body = reqBody;
      else body = { ...reqBody };

      httpRes = await client!.post<
        operations.RegisterSchemaResponse,
        AxiosResponse<operations.RegisterSchemaResponse>,
        unknown
      >(url, body, {
        headers: headers,
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.RegisterSchemaResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  RevokeEmbedAccessToken = async (
    props: operations.RevokeEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeEmbedAccessTokenResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/workspace/embed-access-tokens/{tokenID}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    let httpRes:
      | AxiosResponse<operations.RevokeEmbedAccessTokenResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.delete<
        operations.RevokeEmbedAccessTokenResponse,
        AxiosResponse<operations.RevokeEmbedAccessTokenResponse>,
        unknown
      >(url, {
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.RevokeEmbedAccessTokenResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  UpsertApi = async (
    props: operations.UpsertApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}",
      props.PathParams
    );

    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(props);
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;
    const headers = { ...reqHeaders, ...config?.headers };

    let httpRes: AxiosResponse<operations.UpsertApiResponse> | undefined =
      undefined;
    try {
      let body: unknown;
      if (reqBody instanceof FormData) body = reqBody;
      else body = { ...reqBody };

      httpRes = await client!.put<
        operations.UpsertApiResponse,
        AxiosResponse<operations.UpsertApiResponse>,
        unknown
      >(url, body, {
        headers: headers,
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.UpsertApiResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };

  UpsertApiEndpoint = async (
    props: operations.UpsertApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiEndpointResponse | Error> => {
    const baseURL: string = this.serverURL!;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}",
      props.PathParams
    );

    let [reqHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqHeaders, reqBody] = SerializeRequestBody(props);
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;
    const headers = { ...reqHeaders, ...config?.headers };

    let httpRes:
      | AxiosResponse<operations.UpsertApiEndpointResponse>
      | undefined = undefined;
    try {
      let body: unknown;
      if (reqBody instanceof FormData) body = reqBody;
      else body = { ...reqBody };

      httpRes = await client!.put<
        operations.UpsertApiEndpointResponse,
        AxiosResponse<operations.UpsertApiEndpointResponse>,
        unknown
      >(url, body, {
        headers: headers,
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error(`Error sending request, cause: ${e.message}`);
      }
    }

    const contentType: string = httpRes?.headers?.["content-type"]!;

    let res: operations.UpsertApiEndpointResponse | undefined = undefined;
    switch (httpRes?.status) {
      case 200:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
      default:
        if (contentType.includes("application/json")) res = httpRes?.data!;
        break;
    }

    if (res == null)
      return new Error(
        `Failed to get valid response for content-type: ${contentType}`
      );
    res.StatusCode = httpRes?.status!;
    res.ContentType = contentType!;

    return res;
  };
}
