/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { ApiEndpoints } from "./apiendpoints";
import { Apis } from "./apis";
import { Embeds } from "./embeds";
import { Metadata } from "./metadata";
import { Plugins } from "./plugins";
import { Requests } from "./requests";
import { Schemas } from "./schemas";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export const ServerProd = "prod";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
    [ServerProd]: "https://api.prod.speakeasyapi.dev",
} as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.3.0";
    sdkVersion = "2.1.0";
    genVersion = "2.185.0";
    userAgent =
        "speakeasy-sdk/typescript 2.1.0 2.185.0 0.3.0 @speakeasy-api/speakeasy-client-sdk-typescript";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Speakeasy API: The Speakeasy API allows teams to manage common operations with their APIs
 *
 * @see {@link /docs} - The Speakeasy Platform Documentation
 */
export class Speakeasy {
    /**
     * REST APIs for managing Api entities
     */
    public apis: Apis;
    /**
     * REST APIs for managing ApiEndpoint entities
     */
    public apiEndpoints: ApiEndpoints;
    /**
     * REST APIs for managing Version Metadata entities
     */
    public metadata: Metadata;
    /**
     * REST APIs for managing Schema entities
     */
    public schemas: Schemas;
    /**
     * REST APIs for retrieving request information
     */
    public requests: Requests;
    /**
     * REST APIs for managing and running plugins
     */
    public plugins: Plugins;
    /**
     * REST APIs for managing embeds
     */
    public embeds: Embeds;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const server = props?.server ?? ServerProd;

        if (!serverURL) {
            serverURL = ServerList[server];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.apis = new Apis(this.sdkConfiguration);
        this.apiEndpoints = new ApiEndpoints(this.sdkConfiguration);
        this.metadata = new Metadata(this.sdkConfiguration);
        this.schemas = new Schemas(this.sdkConfiguration);
        this.requests = new Requests(this.sdkConfiguration);
        this.plugins = new Plugins(this.sdkConfiguration);
        this.embeds = new Embeds(this.sdkConfiguration);
    }

    /**
     * Validate the current api key.
     */
    async validateApiKey(config?: AxiosRequestConfig): Promise<operations.ValidateApiKeyResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/v1/auth/validate";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ValidateApiKeyResponse = new operations.ValidateApiKeyResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
