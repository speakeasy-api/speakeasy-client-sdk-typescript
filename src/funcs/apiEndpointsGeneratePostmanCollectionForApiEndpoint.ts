/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

export enum GeneratePostmanCollectionForApiEndpointAcceptEnum {
  applicationJson = "application/json",
  applicationOctetStream = "application/octet-stream",
}

/**
 * Generate a Postman collection for a particular ApiEndpoint.
 *
 * @remarks
 * Generates a postman collection that allows the endpoint to be called from postman variables produced for any path/query/header parameters included in the OpenAPI document.
 */
export async function apiEndpointsGeneratePostmanCollectionForApiEndpoint(
  client: SpeakeasyCore,
  request: operations.GeneratePostmanCollectionForApiEndpointRequest,
  options?: RequestOptions & {
    acceptHeaderOverride?: GeneratePostmanCollectionForApiEndpointAcceptEnum;
  },
): Promise<
  Result<
    operations.GeneratePostmanCollectionForApiEndpointResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.GeneratePostmanCollectionForApiEndpointRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    apiEndpointID: encodeSimple("apiEndpointID", payload.apiEndpointID, {
      explode: false,
      charEncoding: "percent",
    }),
    apiID: encodeSimple("apiID", payload.apiID, {
      explode: false,
      charEncoding: "percent",
    }),
    versionID: encodeSimple("versionID", payload.versionID, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman",
  )(pathParams);

  const headers = new Headers({
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, application/octet-stream;q=0",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "generatePostmanCollectionForApiEndpoint",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    operations.GeneratePostmanCollectionForApiEndpointResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.stream(
      "2XX",
      operations.GeneratePostmanCollectionForApiEndpointResponse$inboundSchema,
    ),
    M.json(
      "4XX",
      operations.GeneratePostmanCollectionForApiEndpointResponse$inboundSchema,
    ),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
