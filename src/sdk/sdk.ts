import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { CreateSecurityClient } from "../internal/utils/security";
import { Security } from "./models/shared";
import * as utils from "../internal/utils/utils";
import * as shared from "./models/shared";
import * as operations from "./models/operations";
import * as qs from "qs";
import { ParamsSerializerOptions } from "axios";
import { ParamDecorator } from "internal/utils/pathparams";
import { GetQueryParamDecoratorValues } from "internal/utils/queryparams";
import { FormSerializer } from "internal/utils/queryparams";

const Servers = ["http://api.prod.speakeasyapi.dev"] as const;

export function WithServerURL(
  serverURL: string,
  params: Map<string, string>
): Function {
  return function (sdk: SDK) {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}
export function WithSecurity(serverURL: string, security: Security): Function {
  return function (sdk: SDK) {
    sdk.securityClient = CreateSecurityClient(serverURL, security);
  };
}

export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  serverURL: string;
  constructor(serverURL?: string, ...opts: Function[]) {
    this.serverURL = serverURL || Servers[0];
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }
  }

  DeleteApi = async (
    props: operations.DeleteApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.DeleteApiResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  DeleteApiEndpoint = async (
    props: operations.DeleteApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiEndpointResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.DeleteApiEndpointResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  DeleteSchema = async (
    props: operations.DeleteSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSchemaResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.DeleteSchemaResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  DeleteVersionMetadata = async (
    props: operations.DeleteVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVersionMetadataResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.DeleteVersionMetadataResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  DownloadSchema = async (
    props: operations.DownloadSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSchemaResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.DownloadSchemaResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.Schema = httpRes?.data?.Schema;
            break;
          case `application/x-yaml`:
            res.Schema = httpRes?.data?.Schema;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  DownloadSchemaRevision = async (
    props: operations.DownloadSchemaRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSchemaRevisionResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.DownloadSchemaRevisionResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.Schema = httpRes?.data?.Schema;
            break;
          case `application/x-yaml`:
            res.Schema = httpRes?.data?.Schema;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  FindApiEndpoint = async (
    props: operations.FindApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindApiEndpointResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.FindApiEndpointResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.ApiEndpoint = httpRes?.data?.ApiEndpoint;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GenerateOpenApiSpec = async (
    props: operations.GenerateOpenApiSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateOpenApiSpecResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GenerateOpenApiSpecResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.GenerateOpenApiSpecDiff =
              httpRes?.data?.GenerateOpenApiSpecDiff;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GenerateOpenApiSpecForApiEndpoint = async (
    props: operations.GenerateOpenApiSpecForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateOpenApiSpecForApiEndpointResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GenerateOpenApiSpecForApiEndpointResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.GenerateOpenApiSpecDiff =
              httpRes?.data?.GenerateOpenApiSpecDiff;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GeneratePostmanCollection = async (
    props: operations.GeneratePostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeneratePostmanCollectionResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GeneratePostmanCollectionResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.PostmanCollection = httpRes?.data?.PostmanCollection;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GeneratePostmanCollectionForApiEndpoint = async (
    props: operations.GeneratePostmanCollectionForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<
    operations.GeneratePostmanCollectionForApiEndpointResponse | Error
  > => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GeneratePostmanCollectionForApiEndpointResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.PostmanCollection = httpRes?.data?.PostmanCollection;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GenerateRequestPostmanCollection = async (
    props: operations.GenerateRequestPostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateRequestPostmanCollectionResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GenerateRequestPostmanCollectionResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.PostmanCollection = httpRes?.data?.PostmanCollection;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetAllApiEndpoints = async (
    props: operations.GetAllApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiEndpointsResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetAllApiEndpointsResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.ApiEndpoints = httpRes?.data?.ApiEndpoints;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetAllApiVersions = async (
    props: operations.GetAllApiVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiVersionsResponse | Error> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}",
      props.PathParams
    );

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const queryParams: Record<string, unknown> = {};
    let qpSerializer: ParamsSerializerOptions | undefined = undefined;
    const qpDecoratorValues: [ParamDecorator, unknown][] =
      GetQueryParamDecoratorValues(props.QueryParams);
    qpDecoratorValues.forEach((qpDecoratorValue) => {
      const qpDecorator: ParamDecorator = qpDecoratorValue[0];
      const qpValue: unknown = qpDecoratorValue[1];
      queryParams[qpDecorator.ParamName] = qpValue;
      if (qpDecorator.Serialization !== "json") {
        switch (qpDecorator.Style) {
          case "deepObject":
            qpSerializer = {
              encode: (params: unknown) => {
                return qs.stringify(params, { arrayFormat: "repeat" });
              },
            };
            break;
          case "form":
            qpSerializer = { encode: FormSerializer };
            break;
          case "default":
            return new Error(
              `Unsupported query parameter serialization style: ${qpDecorator.Style}`
            );
        }
      }
    });

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: queryParams,
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetAllApiVersionsResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.Apis = httpRes?.data?.Apis;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetAllForVersionApiEndpoints = async (
    props: operations.GetAllForVersionApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllForVersionApiEndpointsResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetAllForVersionApiEndpointsResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.ApiEndpoints = httpRes?.data?.ApiEndpoints;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetApiEndpoint = async (
    props: operations.GetApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiEndpointResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetApiEndpointResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.ApiEndpoint = httpRes?.data?.ApiEndpoint;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetApis = async (
    props: operations.GetApisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApisResponse | Error> => {
    const baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/apis";

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const queryParams: Record<string, unknown> = {};
    let qpSerializer: ParamsSerializerOptions | undefined = undefined;
    const qpDecoratorValues: [ParamDecorator, unknown][] =
      GetQueryParamDecoratorValues(props.QueryParams);
    qpDecoratorValues.forEach((qpDecoratorValue) => {
      const qpDecorator: ParamDecorator = qpDecoratorValue[0];
      const qpValue: unknown = qpDecoratorValue[1];
      queryParams[qpDecorator.ParamName] = qpValue;
      if (qpDecorator.Serialization !== "json") {
        switch (qpDecorator.Style) {
          case "deepObject":
            qpSerializer = {
              encode: (params: unknown) => {
                return qs.stringify(params, { arrayFormat: "repeat" });
              },
            };
            break;
          case "form":
            qpSerializer = { encode: FormSerializer };
            break;
          case "default":
            return new Error(
              `Unsupported query parameter serialization style: ${qpDecorator.Style}`
            );
        }
      }
    });

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: queryParams,
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetApisResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.Apis = httpRes?.data?.Apis;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetEmbedAccessToken = async (
    props: operations.GetEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEmbedAccessTokenResponse | Error> => {
    const baseURL: string = this.serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-token";

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const queryParams: Record<string, unknown> = {};
    let qpSerializer: ParamsSerializerOptions | undefined = undefined;
    const qpDecoratorValues: [ParamDecorator, unknown][] =
      GetQueryParamDecoratorValues(props.QueryParams);
    qpDecoratorValues.forEach((qpDecoratorValue) => {
      const qpDecorator: ParamDecorator = qpDecoratorValue[0];
      const qpValue: unknown = qpDecoratorValue[1];
      queryParams[qpDecorator.ParamName] = qpValue;
      if (qpDecorator.Serialization !== "json") {
        switch (qpDecorator.Style) {
          case "deepObject":
            qpSerializer = {
              encode: (params: unknown) => {
                return qs.stringify(params, { arrayFormat: "repeat" });
              },
            };
            break;
          case "form":
            qpSerializer = { encode: FormSerializer };
            break;
          case "default":
            return new Error(
              `Unsupported query parameter serialization style: ${qpDecorator.Style}`
            );
        }
      }
    });

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: queryParams,
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetEmbedAccessTokenResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.EmbedAccessTokenResponse =
              httpRes?.data?.EmbedAccessTokenResponse;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetRequestFromEventLog = async (
    props: operations.GetRequestFromEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRequestFromEventLogResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetRequestFromEventLogResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.UnboundedRequest = httpRes?.data?.UnboundedRequest;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetSchema = async (
    props: operations.GetSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetSchemaResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.Schema = httpRes?.data?.Schema;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetSchemaDiff = async (
    props: operations.GetSchemaDiffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaDiffResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetSchemaDiffResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.SchemaDiff = httpRes?.data?.SchemaDiff;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetSchemaRevision = async (
    props: operations.GetSchemaRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaRevisionResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetSchemaRevisionResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.Schema = httpRes?.data?.Schema;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetSchemas = async (
    props: operations.GetSchemasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemasResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetSchemasResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.Schemata = httpRes?.data?.Schemata;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetValidEmbedAccessTokens = async (
    config?: AxiosRequestConfig
  ): Promise<operations.GetValidEmbedAccessTokensResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetValidEmbedAccessTokensResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.EmbedTokens = httpRes?.data?.EmbedTokens;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  GetVersionMetadata = async (
    props: operations.GetVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionMetadataResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.GetVersionMetadataResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.VersionMetadata = httpRes?.data?.VersionMetadata;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  InsertVersionMetadata = async (
    props: operations.InsertVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InsertVersionMetadataResponse | Error> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/metadata",
      props.PathParams
    );

    let reqContentType = "application/json";
    try {
      reqContentType = utils.SerializeRequestBody(props);
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error("Error serializing request body", {
          cause: e as Error,
        });
      }
    }

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const headers = config?.headers ?? { "Content-Type": reqContentType };
    if (headers["Content-Type"] == null)
      headers["Content-Type"] = reqContentType;

    let httpRes:
      | AxiosResponse<operations.InsertVersionMetadataResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.post<
        operations.InsertVersionMetadataResponse,
        AxiosResponse<operations.InsertVersionMetadataResponse>,
        unknown
      >(url, {
        headers: headers,
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.InsertVersionMetadataResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.VersionMetadata = httpRes?.data?.VersionMetadata;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  QueryEventLog = async (
    props: operations.QueryEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryEventLogResponse | Error> => {
    const baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/eventlog/query";

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const queryParams: Record<string, unknown> = {};
    let qpSerializer: ParamsSerializerOptions | undefined = undefined;
    const qpDecoratorValues: [ParamDecorator, unknown][] =
      GetQueryParamDecoratorValues(props.QueryParams);
    qpDecoratorValues.forEach((qpDecoratorValue) => {
      const qpDecorator: ParamDecorator = qpDecoratorValue[0];
      const qpValue: unknown = qpDecoratorValue[1];
      queryParams[qpDecorator.ParamName] = qpValue;
      if (qpDecorator.Serialization !== "json") {
        switch (qpDecorator.Style) {
          case "deepObject":
            qpSerializer = {
              encode: (params: unknown) => {
                return qs.stringify(params, { arrayFormat: "repeat" });
              },
            };
            break;
          case "form":
            qpSerializer = { encode: FormSerializer };
            break;
          case "default":
            return new Error(
              `Unsupported query parameter serialization style: ${qpDecorator.Style}`
            );
        }
      }
    });

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: queryParams,
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.QueryEventLogResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.BoundedRequests = httpRes?.data?.BoundedRequests;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  RegisterSchema = async (
    props: operations.RegisterSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegisterSchemaResponse | Error> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema",
      props.PathParams
    );

    let reqContentType = "application/json";
    try {
      reqContentType = utils.SerializeRequestBody(props);
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error("Error serializing request body", {
          cause: e as Error,
        });
      }
    }

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const headers = config?.headers ?? { "Content-Type": reqContentType };
    if (headers["Content-Type"] == null)
      headers["Content-Type"] = reqContentType;

    let httpRes: AxiosResponse<operations.RegisterSchemaResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.post<
        operations.RegisterSchemaResponse,
        AxiosResponse<operations.RegisterSchemaResponse>,
        unknown
      >(url, {
        headers: headers,
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.RegisterSchemaResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  RevokeEmbedAccessToken = async (
    props: operations.RevokeEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeEmbedAccessTokenResponse | Error> => {
    const baseURL: string = this.serverURL;
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
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.RevokeEmbedAccessTokenResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  UpsertApi = async (
    props: operations.UpsertApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiResponse | Error> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}",
      props.PathParams
    );

    let reqContentType = "application/json";
    try {
      reqContentType = utils.SerializeRequestBody(props);
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error("Error serializing request body", {
          cause: e as Error,
        });
      }
    }

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const headers = config?.headers ?? { "Content-Type": reqContentType };
    if (headers["Content-Type"] == null)
      headers["Content-Type"] = reqContentType;

    let httpRes: AxiosResponse<operations.UpsertApiResponse> | undefined =
      undefined;
    try {
      httpRes = await client!.put<
        operations.UpsertApiResponse,
        AxiosResponse<operations.UpsertApiResponse>,
        unknown
      >(url, {
        headers: headers,
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.UpsertApiResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.Api = httpRes?.data?.Api;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };

  UpsertApiEndpoint = async (
    props: operations.UpsertApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiEndpointResponse | Error> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}",
      props.PathParams
    );

    let reqContentType = "application/json";
    try {
      reqContentType = utils.SerializeRequestBody(props);
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error("Error serializing request body", {
          cause: e as Error,
        });
      }
    }

    let client: AxiosInstance | undefined = this.defaultClient;

    if (this.securityClient != null) client = this.securityClient;

    const headers = config?.headers ?? { "Content-Type": reqContentType };
    if (headers["Content-Type"] == null)
      headers["Content-Type"] = reqContentType;

    let httpRes:
      | AxiosResponse<operations.UpsertApiEndpointResponse>
      | undefined = undefined;
    try {
      httpRes = await client!.put<
        operations.UpsertApiEndpointResponse,
        AxiosResponse<operations.UpsertApiEndpointResponse>,
        unknown
      >(url, {
        headers: headers,
        ...config,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return new Error("Error sending request", { cause: e as Error });
      }
    }

    const contentType: string = httpRes?.headers?.["Content-Type"]!;

    const res: operations.UpsertApiEndpointResponse = {
      StatusCode: httpRes?.status!,
      ContentType: contentType!,
    };
    switch (httpRes?.status) {
      case 200:
        switch (contentType) {
          case `application/json`:
            res.ApiEndpoint = httpRes?.data?.ApiEndpoint;
            break;
        }
        break;
      default:
        switch (contentType) {
          case `application/json`:
            res.Error = httpRes?.data?.Error;
            break;
        }
        break;
    }
    return res;
  };
}
