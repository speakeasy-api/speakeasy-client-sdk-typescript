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

/**
 * Grant a user access to a particular workspace
 */
export async function workspacesGrantAccess(
  client: SpeakeasyCore,
  request: operations.GrantUserAccessToWorkspaceRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GrantUserAccessToWorkspaceResponse,
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
      operations.GrantUserAccessToWorkspaceRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    email: encodeSimple("email", payload.email, {
      explode: false,
      charEncoding: "percent",
    }),
    workspace_id: encodeSimple("workspace_id", payload.workspace_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v1/workspace/{workspace_id}/team/email/{email}")(
    pathParams,
  );

  const headers = new Headers({
    Accept: "application/json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "grantUserAccessToWorkspace",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "PUT",
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
    operations.GrantUserAccessToWorkspaceResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GrantUserAccessToWorkspaceResponse$inboundSchema),
    M.json("4XX", operations.GrantUserAccessToWorkspaceResponse$inboundSchema),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
