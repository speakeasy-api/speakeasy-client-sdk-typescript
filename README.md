<div align="center">
    <picture>
	<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/5dbef0ff-ee5f-4e8f-8abd-9f57e3310cb9">
	<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/38058088-ac68-443e-9d63-94200c201759">
	<img width="400px" src="https://github.com/user-attachments/assets/5dbef0ff-ee5f-4e8f-8abd-9f57e3310cb9#gh-light-mode-only" alt="Speakeasy">
    </picture>
    <h1>Speakeasy TypeScript SDK</h1>
    <p><strong>The platform to build, test, document and distribute APIs to your users ❤️ Building really high quality APIs is hard. Speakeasy is a set of OpenAPI tools to make it easier.</strong></p>
    <p>Developer-friendly & type-safe TypeScript SDK specifically catered to leverage the <strong>Speakeasy</strong> API.</p>
    <a href="https://speakeasy.com/"><img src="https://custom-icon-badges.demolab.com/badge/-Read%20The%20Docs-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://join.slack.com/t/speakeasy-dev/shared_invite/zt-1cwb3flxz-lS5SyZxAsF_3NOq5xc8Cjw"><img src="https://img.shields.io/static/v1?label=Slack&message=Join&color=7289da&style=for-the-badge" /></a>
</div>

<!-- Start Summary [summary] -->
## Summary

Speakeasy API: The Speakeasy API allows teams to manage common operations with their APIs

For more information about the API: [The Speakeasy Platform Documentation](/docs)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @speakeasy-api/speakeasy-client-sdk-typescript
```

### PNPM

```bash
pnpm add @speakeasy-api/speakeasy-client-sdk-typescript
```

### Bun

```bash
bun add @speakeasy-api/speakeasy-client-sdk-typescript
```

### Yarn

```bash
yarn add @speakeasy-api/speakeasy-client-sdk-typescript zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.getApis({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [apiEndpoints](docs/sdks/apiendpoints/README.md)

* [deleteApiEndpoint](docs/sdks/apiendpoints/README.md#deleteapiendpoint) - Delete an ApiEndpoint.
* [findApiEndpoint](docs/sdks/apiendpoints/README.md#findapiendpoint) - Find an ApiEndpoint via its displayName.
* [generateOpenApiSpecForApiEndpoint](docs/sdks/apiendpoints/README.md#generateopenapispecforapiendpoint) - Generate an OpenAPI specification for a particular ApiEndpoint.
* [generatePostmanCollectionForApiEndpoint](docs/sdks/apiendpoints/README.md#generatepostmancollectionforapiendpoint) - Generate a Postman collection for a particular ApiEndpoint.
* [getAllApiEndpoints](docs/sdks/apiendpoints/README.md#getallapiendpoints) - Get all Api endpoints for a particular apiID.
* [getAllForVersionApiEndpoints](docs/sdks/apiendpoints/README.md#getallforversionapiendpoints) - Get all ApiEndpoints for a particular apiID and versionID.
* [getApiEndpoint](docs/sdks/apiendpoints/README.md#getapiendpoint) - Get an ApiEndpoint.
* [upsertApiEndpoint](docs/sdks/apiendpoints/README.md#upsertapiendpoint) - Upsert an ApiEndpoint.

### [apis](docs/sdks/apis/README.md)

* [deleteApi](docs/sdks/apis/README.md#deleteapi) - Delete an Api.
* [generateOpenApiSpec](docs/sdks/apis/README.md#generateopenapispec) - Generate an OpenAPI specification for a particular Api.
* [generatePostmanCollection](docs/sdks/apis/README.md#generatepostmancollection) - Generate a Postman collection for a particular Api.
* [getAllApiVersions](docs/sdks/apis/README.md#getallapiversions) - Get all Api versions for a particular ApiEndpoint.
* [getApis](docs/sdks/apis/README.md#getapis) - Get a list of Apis for a given workspace
* [upsertApi](docs/sdks/apis/README.md#upsertapi) - Upsert an Api

### [artifacts](docs/sdks/artifacts/README.md)

* [getBlob](docs/sdks/artifacts/README.md#getblob) - Get blob for a particular digest
* [getManifest](docs/sdks/artifacts/README.md#getmanifest) - Get manifest for a particular reference
* [getNamespaces](docs/sdks/artifacts/README.md#getnamespaces) - Each namespace contains many revisions.
* [getRevisions](docs/sdks/artifacts/README.md#getrevisions)
* [getTags](docs/sdks/artifacts/README.md#gettags)
* [postTags](docs/sdks/artifacts/README.md#posttags) - Add tags to an existing revision
* [preflight](docs/sdks/artifacts/README.md#preflight) - Get access token for communicating with OCI distribution endpoints

### [auth](docs/sdks/auth/README.md)

* [getAccess](docs/sdks/auth/README.md#getaccess) - Get access allowances for a particular workspace
* [getAccessToken](docs/sdks/auth/README.md#getaccesstoken) - Get or refresh an access token for the current workspace.
* [getUser](docs/sdks/auth/README.md#getuser) - Get information about the current user.
* [validateApiKey](docs/sdks/auth/README.md#validateapikey) - Validate the current api key.

### [embeds](docs/sdks/embeds/README.md)

* [getEmbedAccessToken](docs/sdks/embeds/README.md#getembedaccesstoken) - Get an embed access token for the current workspace.
* [getValidEmbedAccessTokens](docs/sdks/embeds/README.md#getvalidembedaccesstokens) - Get all valid embed access tokens for the current workspace.
* [revokeEmbedAccessToken](docs/sdks/embeds/README.md#revokeembedaccesstoken) - Revoke an embed access EmbedToken.

### [events](docs/sdks/events/README.md)

* [getEventsByTarget](docs/sdks/events/README.md#geteventsbytarget) - Load recent events for a particular workspace
* [getTargets](docs/sdks/events/README.md#gettargets) - Load targets for a particular workspace
* [getTargetsDeprecated](docs/sdks/events/README.md#gettargetsdeprecated) - Load targets for a particular workspace
* [post](docs/sdks/events/README.md#post) - Post events for a specific workspace
* [search](docs/sdks/events/README.md#search) - Search events for a particular workspace by any field

### [github](docs/sdks/github/README.md)

* [checkAccess](docs/sdks/github/README.md#checkaccess)
* [checkPublishingPRs](docs/sdks/github/README.md#checkpublishingprs)
* [checkPublishingSecrets](docs/sdks/github/README.md#checkpublishingsecrets)
* [configureCodeSamples](docs/sdks/github/README.md#configurecodesamples)
* [configureMintlifyRepo](docs/sdks/github/README.md#configuremintlifyrepo)
* [configureTarget](docs/sdks/github/README.md#configuretarget)
* [getAction](docs/sdks/github/README.md#getaction)
* [storePublishingSecrets](docs/sdks/github/README.md#storepublishingsecrets)
* [triggerAction](docs/sdks/github/README.md#triggeraction)

### [metadata](docs/sdks/metadata/README.md)

* [deleteVersionMetadata](docs/sdks/metadata/README.md#deleteversionmetadata) - Delete metadata for a particular apiID and versionID.
* [getVersionMetadata](docs/sdks/metadata/README.md#getversionmetadata) - Get all metadata for a particular apiID and versionID.
* [insertVersionMetadata](docs/sdks/metadata/README.md#insertversionmetadata) - Insert metadata for a particular apiID and versionID.

### [organizations](docs/sdks/organizations/README.md)

* [create](docs/sdks/organizations/README.md#create) - Create an organization
* [createFreeTrial](docs/sdks/organizations/README.md#createfreetrial) - Create a free trial for an organization
* [get](docs/sdks/organizations/README.md#get) - Get organization
* [getAll](docs/sdks/organizations/README.md#getall) - Get organizations for a user
* [getUsage](docs/sdks/organizations/README.md#getusage) - Get billing usage summary for a particular organization

### [reports](docs/sdks/reports/README.md)

* [getChangesReportSignedUrl](docs/sdks/reports/README.md#getchangesreportsignedurl) - Get the signed access url for the change reports for a particular document.
* [getLintingReportSignedUrl](docs/sdks/reports/README.md#getlintingreportsignedurl) - Get the signed access url for the linting reports for a particular document.
* [uploadReport](docs/sdks/reports/README.md#uploadreport) - Upload a report.

### [requests](docs/sdks/requests/README.md)

* [generateRequestPostmanCollection](docs/sdks/requests/README.md#generaterequestpostmancollection) - Generate a Postman collection for a particular request.
* [getRequestFromEventLog](docs/sdks/requests/README.md#getrequestfromeventlog) - Get information about a particular request.
* [queryEventLog](docs/sdks/requests/README.md#queryeventlog) - Query the event log to retrieve a list of requests.

### [schemas](docs/sdks/schemas/README.md)

* [deleteSchema](docs/sdks/schemas/README.md#deleteschema) - Delete a particular schema revision for an Api.
* [downloadSchema](docs/sdks/schemas/README.md#downloadschema) - Download the latest schema for a particular apiID.
* [downloadSchemaRevision](docs/sdks/schemas/README.md#downloadschemarevision) - Download a particular schema revision for an Api.
* [getSchema](docs/sdks/schemas/README.md#getschema) - Get information about the latest schema.
* [getSchemaDiff](docs/sdks/schemas/README.md#getschemadiff) - Get a diff of two schema revisions for an Api.
* [getSchemaRevision](docs/sdks/schemas/README.md#getschemarevision) - Get information about a particular schema revision for an Api.
* [getSchemas](docs/sdks/schemas/README.md#getschemas) - Get information about all schemas associated with a particular apiID.
* [registerSchema](docs/sdks/schemas/README.md#registerschema) - Register a schema.

### [shortURLs](docs/sdks/shorturls/README.md)

* [create](docs/sdks/shorturls/README.md#create) - Shorten a URL.


### [suggest](docs/sdks/suggest/README.md)

* [suggest](docs/sdks/suggest/README.md#suggest) - Generate suggestions for improving an OpenAPI document.
* [suggestOpenAPI](docs/sdks/suggest/README.md#suggestopenapi) - (DEPRECATED) Generate suggestions for improving an OpenAPI document.
* [suggestOpenAPIRegistry](docs/sdks/suggest/README.md#suggestopenapiregistry) - Generate suggestions for improving an OpenAPI document stored in the registry.

### [workspaces](docs/sdks/workspaces/README.md)

* [create](docs/sdks/workspaces/README.md#create) - Create a workspace
* [createToken](docs/sdks/workspaces/README.md#createtoken) - Create a token for a particular workspace
* [deleteToken](docs/sdks/workspaces/README.md#deletetoken) - Delete a token for a particular workspace
* [get](docs/sdks/workspaces/README.md#get) - Get workspace by context
* [getAll](docs/sdks/workspaces/README.md#getall) - Get workspaces for a user
* [getByID](docs/sdks/workspaces/README.md#getbyid) - Get workspace
* [getFeatureFlags](docs/sdks/workspaces/README.md#getfeatureflags) - Get workspace feature flags
* [getSettings](docs/sdks/workspaces/README.md#getsettings) - Get workspace settings
* [getTeam](docs/sdks/workspaces/README.md#getteam) - Get team members for a particular workspace
* [getTokens](docs/sdks/workspaces/README.md#gettokens) - Get tokens for a particular workspace
* [grantAccess](docs/sdks/workspaces/README.md#grantaccess) - Grant a user access to a particular workspace
* [revokeAccess](docs/sdks/workspaces/README.md#revokeaccess) - Revoke a user's access to a particular workspace
* [update](docs/sdks/workspaces/README.md#update) - Update workspace details
* [updateSettings](docs/sdks/workspaces/README.md#updatesettings) - Update workspace settings

</details>
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `sdk/models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `deleteApi` method may throw the following errors:

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { SDKValidationError } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/errors";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  let result;
  try {
    result = await speakeasy.apis.deleteApi({
      apiID: "<id>",
      versionID: "<id>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `prod` | `https://api.prod.speakeasyapi.dev` | None |

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  server: "prod",
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.deleteApi({
    apiID: "<id>",
    versionID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  serverURL: "https://api.prod.speakeasyapi.dev",
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.deleteApi({
    apiID: "<id>",
    versionID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { HTTPClient } from "@speakeasy-api/speakeasy-client-sdk-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Speakeasy({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name                  | Type                  | Scheme                |
| --------------------- | --------------------- | --------------------- |
| `apiKey`              | apiKey                | API key               |
| `bearer`              | http                  | HTTP Bearer           |
| `workspaceIdentifier` | apiKey                | API key               |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.deleteApi({
    apiID: "<id>",
    versionID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.deleteApi({
    apiID: "<id>",
    versionID: "<id>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.deleteApi({
    apiID: "<id>",
    versionID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`apiEndpointsDeleteApiEndpoint`](docs/sdks/apiendpoints/README.md#deleteapiendpoint) - Delete an ApiEndpoint.
- [`apiEndpointsFindApiEndpoint`](docs/sdks/apiendpoints/README.md#findapiendpoint) - Find an ApiEndpoint via its displayName.
- [`apiEndpointsGenerateOpenApiSpecForApiEndpoint`](docs/sdks/apiendpoints/README.md#generateopenapispecforapiendpoint) - Generate an OpenAPI specification for a particular ApiEndpoint.
- [`apiEndpointsGeneratePostmanCollectionForApiEndpoint`](docs/sdks/apiendpoints/README.md#generatepostmancollectionforapiendpoint) - Generate a Postman collection for a particular ApiEndpoint.
- [`apiEndpointsGetAllApiEndpoints`](docs/sdks/apiendpoints/README.md#getallapiendpoints) - Get all Api endpoints for a particular apiID.
- [`apiEndpointsGetAllForVersionApiEndpoints`](docs/sdks/apiendpoints/README.md#getallforversionapiendpoints) - Get all ApiEndpoints for a particular apiID and versionID.
- [`apiEndpointsGetApiEndpoint`](docs/sdks/apiendpoints/README.md#getapiendpoint) - Get an ApiEndpoint.
- [`apiEndpointsUpsertApiEndpoint`](docs/sdks/apiendpoints/README.md#upsertapiendpoint) - Upsert an ApiEndpoint.
- [`apisDeleteApi`](docs/sdks/apis/README.md#deleteapi) - Delete an Api.
- [`apisGenerateOpenApiSpec`](docs/sdks/apis/README.md#generateopenapispec) - Generate an OpenAPI specification for a particular Api.
- [`apisGeneratePostmanCollection`](docs/sdks/apis/README.md#generatepostmancollection) - Generate a Postman collection for a particular Api.
- [`apisGetAllApiVersions`](docs/sdks/apis/README.md#getallapiversions) - Get all Api versions for a particular ApiEndpoint.
- [`apisGetApis`](docs/sdks/apis/README.md#getapis) - Get a list of Apis for a given workspace
- [`apisUpsertApi`](docs/sdks/apis/README.md#upsertapi) - Upsert an Api
- [`artifactsGetBlob`](docs/sdks/artifacts/README.md#getblob) - Get blob for a particular digest
- [`artifactsGetManifest`](docs/sdks/artifacts/README.md#getmanifest) - Get manifest for a particular reference
- [`artifactsGetNamespaces`](docs/sdks/artifacts/README.md#getnamespaces) - Each namespace contains many revisions.
- [`artifactsGetRevisions`](docs/sdks/artifacts/README.md#getrevisions)
- [`artifactsGetTags`](docs/sdks/artifacts/README.md#gettags)
- [`artifactsPostTags`](docs/sdks/artifacts/README.md#posttags) - Add tags to an existing revision
- [`artifactsPreflight`](docs/sdks/artifacts/README.md#preflight) - Get access token for communicating with OCI distribution endpoints
- [`authGetAccess`](docs/sdks/auth/README.md#getaccess) - Get access allowances for a particular workspace
- [`authGetAccessToken`](docs/sdks/auth/README.md#getaccesstoken) - Get or refresh an access token for the current workspace.
- [`authGetUser`](docs/sdks/auth/README.md#getuser) - Get information about the current user.
- [`authValidateApiKey`](docs/sdks/auth/README.md#validateapikey) - Validate the current api key.
- [`embedsGetEmbedAccessToken`](docs/sdks/embeds/README.md#getembedaccesstoken) - Get an embed access token for the current workspace.
- [`embedsGetValidEmbedAccessTokens`](docs/sdks/embeds/README.md#getvalidembedaccesstokens) - Get all valid embed access tokens for the current workspace.
- [`embedsRevokeEmbedAccessToken`](docs/sdks/embeds/README.md#revokeembedaccesstoken) - Revoke an embed access EmbedToken.
- [`eventsGetEventsByTarget`](docs/sdks/events/README.md#geteventsbytarget) - Load recent events for a particular workspace
- [`eventsGetTargets`](docs/sdks/events/README.md#gettargets) - Load targets for a particular workspace
- [`eventsGetTargetsDeprecated`](docs/sdks/events/README.md#gettargetsdeprecated) - Load targets for a particular workspace
- [`eventsPost`](docs/sdks/events/README.md#post) - Post events for a specific workspace
- [`eventsSearch`](docs/sdks/events/README.md#search) - Search events for a particular workspace by any field
- [`githubCheckAccess`](docs/sdks/github/README.md#checkaccess)
- [`githubCheckPublishingPRs`](docs/sdks/github/README.md#checkpublishingprs)
- [`githubCheckPublishingSecrets`](docs/sdks/github/README.md#checkpublishingsecrets)
- [`githubConfigureCodeSamples`](docs/sdks/github/README.md#configurecodesamples)
- [`githubConfigureMintlifyRepo`](docs/sdks/github/README.md#configuremintlifyrepo)
- [`githubConfigureTarget`](docs/sdks/github/README.md#configuretarget)
- [`githubGetAction`](docs/sdks/github/README.md#getaction)
- [`githubStorePublishingSecrets`](docs/sdks/github/README.md#storepublishingsecrets)
- [`githubTriggerAction`](docs/sdks/github/README.md#triggeraction)
- [`metadataDeleteVersionMetadata`](docs/sdks/metadata/README.md#deleteversionmetadata) - Delete metadata for a particular apiID and versionID.
- [`metadataGetVersionMetadata`](docs/sdks/metadata/README.md#getversionmetadata) - Get all metadata for a particular apiID and versionID.
- [`metadataInsertVersionMetadata`](docs/sdks/metadata/README.md#insertversionmetadata) - Insert metadata for a particular apiID and versionID.
- [`organizationsCreate`](docs/sdks/organizations/README.md#create) - Create an organization
- [`organizationsCreateFreeTrial`](docs/sdks/organizations/README.md#createfreetrial) - Create a free trial for an organization
- [`organizationsGet`](docs/sdks/organizations/README.md#get) - Get organization
- [`organizationsGetAll`](docs/sdks/organizations/README.md#getall) - Get organizations for a user
- [`organizationsGetUsage`](docs/sdks/organizations/README.md#getusage) - Get billing usage summary for a particular organization
- [`reportsGetChangesReportSignedUrl`](docs/sdks/reports/README.md#getchangesreportsignedurl) - Get the signed access url for the change reports for a particular document.
- [`reportsGetLintingReportSignedUrl`](docs/sdks/reports/README.md#getlintingreportsignedurl) - Get the signed access url for the linting reports for a particular document.
- [`reportsUploadReport`](docs/sdks/reports/README.md#uploadreport) - Upload a report.
- [`requestsGenerateRequestPostmanCollection`](docs/sdks/requests/README.md#generaterequestpostmancollection) - Generate a Postman collection for a particular request.
- [`requestsGetRequestFromEventLog`](docs/sdks/requests/README.md#getrequestfromeventlog) - Get information about a particular request.
- [`requestsQueryEventLog`](docs/sdks/requests/README.md#queryeventlog) - Query the event log to retrieve a list of requests.
- [`schemasDeleteSchema`](docs/sdks/schemas/README.md#deleteschema) - Delete a particular schema revision for an Api.
- [`schemasDownloadSchema`](docs/sdks/schemas/README.md#downloadschema) - Download the latest schema for a particular apiID.
- [`schemasDownloadSchemaRevision`](docs/sdks/schemas/README.md#downloadschemarevision) - Download a particular schema revision for an Api.
- [`schemasGetSchema`](docs/sdks/schemas/README.md#getschema) - Get information about the latest schema.
- [`schemasGetSchemaDiff`](docs/sdks/schemas/README.md#getschemadiff) - Get a diff of two schema revisions for an Api.
- [`schemasGetSchemaRevision`](docs/sdks/schemas/README.md#getschemarevision) - Get information about a particular schema revision for an Api.
- [`schemasGetSchemas`](docs/sdks/schemas/README.md#getschemas) - Get information about all schemas associated with a particular apiID.
- [`schemasRegisterSchema`](docs/sdks/schemas/README.md#registerschema) - Register a schema.
- [`shortURLsCreate`](docs/sdks/shorturls/README.md#create) - Shorten a URL.
- [`suggestSuggest`](docs/sdks/suggest/README.md#suggest) - Generate suggestions for improving an OpenAPI document.
- [`suggestSuggestOpenAPI`](docs/sdks/suggest/README.md#suggestopenapi) - (DEPRECATED) Generate suggestions for improving an OpenAPI document.
- [`suggestSuggestOpenAPIRegistry`](docs/sdks/suggest/README.md#suggestopenapiregistry) - Generate suggestions for improving an OpenAPI document stored in the registry.
- [`workspacesCreate`](docs/sdks/workspaces/README.md#create) - Create a workspace
- [`workspacesCreateToken`](docs/sdks/workspaces/README.md#createtoken) - Create a token for a particular workspace
- [`workspacesDeleteToken`](docs/sdks/workspaces/README.md#deletetoken) - Delete a token for a particular workspace
- [`workspacesGet`](docs/sdks/workspaces/README.md#get) - Get workspace by context
- [`workspacesGetAll`](docs/sdks/workspaces/README.md#getall) - Get workspaces for a user
- [`workspacesGetByID`](docs/sdks/workspaces/README.md#getbyid) - Get workspace
- [`workspacesGetFeatureFlags`](docs/sdks/workspaces/README.md#getfeatureflags) - Get workspace feature flags
- [`workspacesGetSettings`](docs/sdks/workspaces/README.md#getsettings) - Get workspace settings
- [`workspacesGetTeam`](docs/sdks/workspaces/README.md#getteam) - Get team members for a particular workspace
- [`workspacesGetTokens`](docs/sdks/workspaces/README.md#gettokens) - Get tokens for a particular workspace
- [`workspacesGrantAccess`](docs/sdks/workspaces/README.md#grantaccess) - Grant a user access to a particular workspace
- [`workspacesRevokeAccess`](docs/sdks/workspaces/README.md#revokeaccess) - Revoke a user's access to a particular workspace
- [`workspacesUpdate`](docs/sdks/workspaces/README.md#update) - Update workspace details
- [`workspacesUpdateSettings`](docs/sdks/workspaces/README.md#updatesettings) - Update workspace settings

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { openAsBlob } from "node:fs";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.schemas.registerSchema({
    apiID: "<id>",
    versionID: "<id>",
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const sdk = new Speakeasy({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
