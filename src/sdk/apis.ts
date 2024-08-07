/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeDeepObjectQuery as encodeDeepObjectQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";

export enum GeneratePostmanCollectionAcceptEnum {
    applicationJson = "application/json",
    applicationOctetStream = "application/octet-stream",
}

export class Apis extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Delete an Api.
     *
     * @remarks
     * Delete a particular version of an Api. The will also delete all associated ApiEndpoints, Metadata, Schemas & Request Logs (if using a Postgres datastore).
     */
    async deleteApi(
        request: operations.DeleteApiRequest,
        options?: RequestOptions
    ): Promise<shared.ErrorT | undefined> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteApiRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
            versionID: encodeSimple$("versionID", payload$.versionID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/apis/{apiID}/version/{versionID}")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "deleteApi",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<shared.ErrorT | undefined>()
            .void(200, shared.ErrorT$inboundSchema.optional())
            .json("default", shared.ErrorT$inboundSchema.optional())
            .match(response);

        return result$;
    }

    /**
     * Generate an OpenAPI specification for a particular Api.
     *
     * @remarks
     * This endpoint will generate any missing operations in any registered OpenAPI document if the operation does not already exist in the document.
     * Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.
     */
    async generateOpenApiSpec(
        request: operations.GenerateOpenApiSpecRequest,
        options?: RequestOptions
    ): Promise<operations.GenerateOpenApiSpecResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GenerateOpenApiSpecRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
            versionID: encodeSimple$("versionID", payload$.versionID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/apis/{apiID}/version/{versionID}/generate/openapi"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "generateOpenApiSpec",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.GenerateOpenApiSpecResponse>()
            .json(200, operations.GenerateOpenApiSpecResponse$inboundSchema)
            .json("default", operations.GenerateOpenApiSpecResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Generate a Postman collection for a particular Api.
     *
     * @remarks
     * Generates a postman collection containing all endpoints for a particular API. Includes variables produced for any path/query/header parameters included in the OpenAPI document.
     */
    async generatePostmanCollection(
        request: operations.GeneratePostmanCollectionRequest,
        options?: RequestOptions & { acceptHeaderOverride?: GeneratePostmanCollectionAcceptEnum }
    ): Promise<operations.GeneratePostmanCollectionResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GeneratePostmanCollectionRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
            versionID: encodeSimple$("versionID", payload$.versionID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/apis/{apiID}/version/{versionID}/generate/postman"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept:
                options?.acceptHeaderOverride ||
                "application/json;q=1, application/octet-stream;q=0",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "generatePostmanCollection",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.GeneratePostmanCollectionResponse>()
            .stream(200, operations.GeneratePostmanCollectionResponse$inboundSchema)
            .json("default", operations.GeneratePostmanCollectionResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Get all Api versions for a particular ApiEndpoint.
     *
     * @remarks
     * Get all Api versions for a particular ApiEndpoint.
     * Supports filtering the versions based on metadata attributes.
     */
    async getAllApiVersions(
        request: operations.GetAllApiVersionsRequest,
        options?: RequestOptions
    ): Promise<operations.GetAllApiVersionsResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAllApiVersionsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/apis/{apiID}")(pathParams$);

        const query$ = encodeDeepObjectQuery$({
            metadata: payload$.metadata,
            op: payload$.op,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getAllApiVersions",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.GetAllApiVersionsResponse>()
            .json(200, operations.GetAllApiVersionsResponse$inboundSchema)
            .json("default", operations.GetAllApiVersionsResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Get a list of Apis for a given workspace
     *
     * @remarks
     * Get a list of all Apis and their versions for a given workspace.
     * Supports filtering the APIs based on metadata attributes.
     */
    async getApis(
        request: operations.GetApisRequest,
        options?: RequestOptions
    ): Promise<operations.GetApisResponse> {
        const input$ = typeof request === "undefined" ? {} : request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetApisRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v1/apis")();

        const query$ = encodeDeepObjectQuery$({
            metadata: payload$.metadata,
            op: payload$.op,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getApis",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.GetApisResponse>()
            .json(200, operations.GetApisResponse$inboundSchema)
            .json("default", operations.GetApisResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Upsert an Api
     *
     * @remarks
     * Upsert an Api. If the Api does not exist, it will be created.
     * If the Api exists, it will be updated.
     */
    async upsertApi(
        request: operations.UpsertApiRequest,
        options?: RequestOptions
    ): Promise<operations.UpsertApiResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpsertApiRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.Api, { explode: true });

        const pathParams$ = {
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/apis/{apiID}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "upsertApi",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.UpsertApiResponse>()
            .json(200, operations.UpsertApiResponse$inboundSchema)
            .json("default", operations.UpsertApiResponse$inboundSchema)
            .match(response);

        return result$;
    }
}
