/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * REST APIs for capturing event data
 */

export class Events {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Post events for a specific workspace
     *
     * @remarks
     * Sends an array of events to be stored for a particular workspace.
     */
    async postWorkspaceEvents(
        req: operations.PostWorkspaceEventsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostWorkspaceEventsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostWorkspaceEventsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/workspace/{workspaceID}/events",
            req,
            this.sdkConfiguration.globals
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        if (reqBody == null) throw new Error("request body is required");
        headers["Accept"] = "*/*";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostWorkspaceEventsResponse =
            new operations.PostWorkspaceEventsResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        switch (true) {
            default:
                break;
        }

        return res;
    }
}
