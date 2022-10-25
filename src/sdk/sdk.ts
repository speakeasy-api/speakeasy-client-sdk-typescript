import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
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
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
    sdk.defaultClient = axios.create({ baseURL: serverURL });
  };
}
export function WithSecurity(serverURL: string, security: Security): Function {
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

  DeleteApi = (
    props: operations.DeleteApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.DeleteApiResponse =
          new operations.DeleteApiResponse();
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  DeleteApiEndpoint = (
    props: operations.DeleteApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApiEndpointResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.DeleteApiEndpointResponse =
          new operations.DeleteApiEndpointResponse();
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  DeleteSchema = (
    props: operations.DeleteSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSchemaResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.DeleteSchemaResponse =
          new operations.DeleteSchemaResponse();
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  DeleteVersionMetadata = (
    props: operations.DeleteVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVersionMetadataResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/metadata/{metaKey}/{metaValue}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.DeleteVersionMetadataResponse =
          new operations.DeleteVersionMetadataResponse();
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  DownloadSchema = (
    props: operations.DownloadSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSchemaResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema/download",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.DownloadSchemaResponse =
          new operations.DownloadSchemaResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.Schema = httpRes?.data;
            if (MatchContentType(contentType, "application/json"))
              res.Schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  DownloadSchemaRevision = (
    props: operations.DownloadSchemaRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSchemaRevisionResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}/download",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.DownloadSchemaRevisionResponse =
          new operations.DownloadSchemaRevisionResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.Schema = httpRes?.data;
            if (MatchContentType(contentType, "application/json"))
              res.Schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  FindApiEndpoint = (
    props: operations.FindApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindApiEndpointResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.FindApiEndpointResponse =
          new operations.FindApiEndpointResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.ApiEndpoint = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GenerateOpenApiSpec = (
    props: operations.GenerateOpenApiSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateOpenApiSpecResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/generate/openapi",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GenerateOpenApiSpecResponse =
          new operations.GenerateOpenApiSpecResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.GenerateOpenApiSpecDiff = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GenerateOpenApiSpecForApiEndpoint = (
    props: operations.GenerateOpenApiSpecForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<
    operations.GenerateOpenApiSpecForApiEndpointResponse | AxiosError
  > => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/openapi",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GenerateOpenApiSpecForApiEndpointResponse =
          new operations.GenerateOpenApiSpecForApiEndpointResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.GenerateOpenApiSpecDiff = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GeneratePostmanCollection = (
    props: operations.GeneratePostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeneratePostmanCollectionResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/generate/postman",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GeneratePostmanCollectionResponse =
          new operations.GeneratePostmanCollectionResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.PostmanCollection = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GeneratePostmanCollectionForApiEndpoint = (
    props: operations.GeneratePostmanCollectionForApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<
    operations.GeneratePostmanCollectionForApiEndpointResponse | AxiosError
  > => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GeneratePostmanCollectionForApiEndpointResponse =
          new operations.GeneratePostmanCollectionForApiEndpointResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.PostmanCollection = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GenerateRequestPostmanCollection = (
    props: operations.GenerateRequestPostmanCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<
    operations.GenerateRequestPostmanCollectionResponse | AxiosError
  > => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/eventlog/{requestID}/generate/postman",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GenerateRequestPostmanCollectionResponse =
          new operations.GenerateRequestPostmanCollectionResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.PostmanCollection = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetAllApiEndpoints = (
    props: operations.GetAllApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiEndpointsResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/api_endpoints",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetAllApiEndpointsResponse =
          new operations.GetAllApiEndpointsResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.ApiEndpoints = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetAllApiVersions = (
    props: operations.GetAllApiVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllApiVersionsResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    const qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(
      props.QueryParams
    );

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
      paramsSerializer: qpSerializer,
    };

    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetAllApiVersionsResponse =
          new operations.GetAllApiVersionsResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.Apis = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetAllForVersionApiEndpoints = (
    props: operations.GetAllForVersionApiEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllForVersionApiEndpointsResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetAllForVersionApiEndpointsResponse =
          new operations.GetAllForVersionApiEndpointsResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.ApiEndpoints = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetApiEndpoint = (
    props: operations.GetApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiEndpointResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetApiEndpointResponse =
          new operations.GetApiEndpointResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.ApiEndpoint = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetApis = (
    props: operations.GetApisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApisResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/apis";

    const client: AxiosInstance = this.securityClient!;

    const qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(
      props.QueryParams
    );

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
      paramsSerializer: qpSerializer,
    };

    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetApisResponse =
          new operations.GetApisResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.Apis = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetEmbedAccessToken = (
    props: operations.GetEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEmbedAccessTokenResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-token";

    const client: AxiosInstance = this.securityClient!;

    const qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(
      props.QueryParams
    );

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
      paramsSerializer: qpSerializer,
    };

    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetEmbedAccessTokenResponse =
          new operations.GetEmbedAccessTokenResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.EmbedAccessTokenResponse = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetRequestFromEventLog = (
    props: operations.GetRequestFromEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRequestFromEventLogResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/eventlog/{requestID}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetRequestFromEventLogResponse =
          new operations.GetRequestFromEventLogResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.UnboundedRequest = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetSchema = (
    props: operations.GetSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetSchemaResponse =
          new operations.GetSchemaResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.Schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetSchemaDiff = (
    props: operations.GetSchemaDiffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaDiffResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema/{baseRevisionID}/diff/{targetRevisionID}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetSchemaDiffResponse =
          new operations.GetSchemaDiffResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.SchemaDiff = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetSchemaRevision = (
    props: operations.GetSchemaRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaRevisionResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schema/{revisionID}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetSchemaRevisionResponse =
          new operations.GetSchemaRevisionResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.Schema = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetSchemas = (
    props: operations.GetSchemasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemasResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/schemas",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetSchemasResponse =
          new operations.GetSchemasResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.Schemata = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetValidEmbedAccessTokens = (
    config?: AxiosRequestConfig
  ): Promise<operations.GetValidEmbedAccessTokensResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-tokens/valid";

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetValidEmbedAccessTokensResponse =
          new operations.GetValidEmbedAccessTokensResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.EmbedTokens = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  GetVersionMetadata = (
    props: operations.GetVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionMetadataResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/apis/{apiID}/version/{versionID}/metadata",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.GetVersionMetadataResponse =
          new operations.GetVersionMetadataResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.VersionMetadata = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  InsertVersionMetadata = (
    props: operations.InsertVersionMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InsertVersionMetadataResponse | AxiosError> | Error => {
    const baseURL: string = this.serverURL;
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

    const client: AxiosInstance = this.securityClient!;
    const headers = { ...reqHeaders, ...config?.headers };

    let body: unknown;
    if (reqBody instanceof FormData) body = reqBody;
    else body = { ...reqBody };

    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.InsertVersionMetadataResponse =
          new operations.InsertVersionMetadataResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.VersionMetadata = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  QueryEventLog = (
    props: operations.QueryEventLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryEventLogResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/eventlog/query";

    const client: AxiosInstance = this.securityClient!;

    const qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(
      props.QueryParams
    );

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: props.QueryParams,
      paramsSerializer: qpSerializer,
    };

    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.QueryEventLogResponse =
          new operations.QueryEventLogResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.BoundedRequests = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  RegisterSchema = (
    props: operations.RegisterSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegisterSchemaResponse | AxiosError> | Error => {
    const baseURL: string = this.serverURL;
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

    const client: AxiosInstance = this.securityClient!;
    const headers = { ...reqHeaders, ...config?.headers };

    let body: unknown;
    if (reqBody instanceof FormData) body = reqBody;
    else body = { ...reqBody };

    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.RegisterSchemaResponse =
          new operations.RegisterSchemaResponse();
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  RevokeEmbedAccessToken = (
    props: operations.RevokeEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeEmbedAccessTokenResponse | AxiosError> => {
    const baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(
      baseURL,
      "/v1/workspace/embed-access-tokens/{tokenID}",
      props.PathParams
    );

    const client: AxiosInstance = this.securityClient!;

    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.RevokeEmbedAccessTokenResponse =
          new operations.RevokeEmbedAccessTokenResponse();
        switch (httpRes?.status) {
          case 200:
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  UpsertApi = (
    props: operations.UpsertApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiResponse | AxiosError> | Error => {
    const baseURL: string = this.serverURL;
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

    const client: AxiosInstance = this.securityClient!;
    const headers = { ...reqHeaders, ...config?.headers };

    let body: unknown;
    if (reqBody instanceof FormData) body = reqBody;
    else body = { ...reqBody };

    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.UpsertApiResponse =
          new operations.UpsertApiResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.Api = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };

  UpsertApiEndpoint = (
    props: operations.UpsertApiEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertApiEndpointResponse | AxiosError> | Error => {
    const baseURL: string = this.serverURL;
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

    const client: AxiosInstance = this.securityClient!;
    const headers = { ...reqHeaders, ...config?.headers };

    let body: unknown;
    if (reqBody instanceof FormData) body = reqBody;
    else body = { ...reqBody };

    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        const res: operations.UpsertApiEndpointResponse =
          new operations.UpsertApiEndpointResponse();
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, "application/json"))
              res.ApiEndpoint = httpRes?.data;
            break;
          default:
            if (MatchContentType(contentType, "application/json"))
              res.Error = httpRes?.data;
            break;
        }

        if (httpRes?.status != null) res.StatusCode = httpRes.status;
        res.ContentType = contentType;

        return res;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  };
}
