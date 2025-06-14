/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { SpeakeasyCore } from "../core.js";
import { appendForm, encodeJSON, encodeSimple } from "../lib/encodings.js";
import {
  getContentTypeFromFileName,
  readableStreamToArrayBuffer,
} from "../lib/files.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
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
import { ResponseValidationError } from "../sdk/models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import { SpeakeasyError } from "../sdk/models/errors/speakeasyerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { APICall, APIPromise } from "../sdk/types/async.js";
import { isBlobLike } from "../sdk/types/blobs.js";
import { Result } from "../sdk/types/fp.js";
import { isReadableStream } from "../sdk/types/streams.js";

/**
 * (DEPRECATED) Generate suggestions for improving an OpenAPI document.
 *
 * @remarks
 * Get suggestions from an LLM model for improving an OpenAPI document.
 */
export function suggestSuggestOpenAPI(
  client: SpeakeasyCore,
  request: operations.SuggestOpenAPIRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    ReadableStream<Uint8Array>,
    | SpeakeasyError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: SpeakeasyCore,
  request: operations.SuggestOpenAPIRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      ReadableStream<Uint8Array>,
      | SpeakeasyError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => operations.SuggestOpenAPIRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = new FormData();

  if (isBlobLike(payload.RequestBody.schema)) {
    appendForm(body, "schema", payload.RequestBody.schema);
  } else if (isReadableStream(payload.RequestBody.schema.content)) {
    const buffer = await readableStreamToArrayBuffer(
      payload.RequestBody.schema.content,
    );
    const contentType =
      getContentTypeFromFileName(payload.RequestBody.schema.fileName)
      || "application/octet-stream";
    const blob = new Blob([buffer], { type: contentType });
    appendForm(body, "schema", blob, payload.RequestBody.schema.fileName);
  } else {
    const contentType =
      getContentTypeFromFileName(payload.RequestBody.schema.fileName)
      || "application/octet-stream";
    appendForm(
      body,
      "schema",
      new Blob([payload.RequestBody.schema.content], { type: contentType }),
      payload.RequestBody.schema.fileName,
    );
  }
  if (payload.RequestBody.opts !== undefined) {
    appendForm(
      body,
      "opts",
      encodeJSON("opts", payload.RequestBody.opts, { explode: true }),
    );
  }

  const path = pathToFunc("/v1/suggest/openapi")();

  const headers = new Headers(compactMap({
    Accept: "application/json",
    "x-session-id": encodeSimple("x-session-id", payload["x-session-id"], {
      explode: false,
      charEncoding: "none",
    }),
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "suggestOpenAPI",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const [result] = await M.match<
    ReadableStream<Uint8Array>,
    | SpeakeasyError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.stream("2XX", z.instanceof(ReadableStream<Uint8Array>), {
      ctype: "application/json",
    }),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req);
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
