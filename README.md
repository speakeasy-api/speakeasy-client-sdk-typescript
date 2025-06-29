<div align="center">
 <a href="https://www.speakeasy.com/" target="_blank">
   <picture>
       <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/21dd5d3a-aefc-4cd3-abee-5e17ef1d4dad">
       <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/0a747f98-d228-462d-9964-fd87bf93adc5">
       <img width="100px" src="https://github.com/user-attachments/assets/21dd5d3a-aefc-4cd3-abee-5e17ef1d4dad#gh-light-mode-only" alt="Speakeasy">
   </picture>
 </a>
  <h1>Speakeasy</h1>
  <p>Build APIs your users love ❤️ with Speakeasy</p>
  <div>
   <a href="https://speakeasy.com/docs/create-client-sdks/" target="_blank"><b>Docs Quickstart</b></a>&nbsp;&nbsp;//&nbsp;&nbsp;<a href="https://join.slack.com/t/speakeasy-dev/shared_invite/zt-1cwb3flxz-lS5SyZxAsF_3NOq5xc8Cjw" target="_blank"><b>Join us on Slack</b></a>
  </div>
 <br />

</div>

<hr />

<!-- Start Summary [summary] -->
## Summary

Speakeasy API: The Subscriptions API manages subscriptions for CLI and registry events

For more information about the API: [The Speakeasy Platform Documentation](/docs)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Retries](#retries)
  * [Requirements](#requirements)
  * [Standalone functions](#standalone-functions)
  * [React hooks with TanStack Query](#react-hooks-with-tanstack-query)
  * [Global Parameters](#global-parameters)
  * [File uploads](#file-uploads)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @speakeasy-api/speakeasy-client-sdk-typescript
# Install optional peer dependencies if you plan to use React hooks
npm add @tanstack/react-query react react-dom
```

### PNPM

```bash
pnpm add @speakeasy-api/speakeasy-client-sdk-typescript
# Install optional peer dependencies if you plan to use React hooks
pnpm add @tanstack/react-query react react-dom
```

### Bun

```bash
bun add @speakeasy-api/speakeasy-client-sdk-typescript
# Install optional peer dependencies if you plan to use React hooks
bun add @tanstack/react-query react react-dom
```

### Yarn

```bash
yarn add @speakeasy-api/speakeasy-client-sdk-typescript zod
# Install optional peer dependencies if you plan to use React hooks
yarn add @tanstack/react-query react react-dom

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Speakeasy": {
      "command": "npx",
      "args": [
        "-y", "--package", "@speakeasy-api/speakeasy-client-sdk-typescript",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--bearer", "...",
        "--workspace-identifier", "...",
        "--workspace-id", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Speakeasy": {
      "command": "npx",
      "args": [
        "-y", "--package", "@speakeasy-api/speakeasy-client-sdk-typescript",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--bearer", "...",
        "--workspace-identifier", "...",
        "--workspace-id", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @speakeasy-api/speakeasy-client-sdk-typescript -- mcp start --help
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
  await speakeasy.artifacts.createRemoteSource();
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [artifacts](docs/sdks/artifacts/README.md)

* [createRemoteSource](docs/sdks/artifacts/README.md#createremotesource) - Configure a new remote source
* [getBlob](docs/sdks/artifacts/README.md#getblob) - Get blob for a particular digest
* [getManifest](docs/sdks/artifacts/README.md#getmanifest) - Get manifest for a particular reference
* [getNamespaces](docs/sdks/artifacts/README.md#getnamespaces) - Each namespace contains many revisions.
* [getRevisions](docs/sdks/artifacts/README.md#getrevisions)
* [getTags](docs/sdks/artifacts/README.md#gettags)
* [listRemoteSources](docs/sdks/artifacts/README.md#listremotesources) - Get remote sources attached to a particular namespace
* [postTags](docs/sdks/artifacts/README.md#posttags) - Add tags to an existing revision
* [preflight](docs/sdks/artifacts/README.md#preflight) - Get access token for communicating with OCI distribution endpoints
* [setArchived](docs/sdks/artifacts/README.md#setarchived) - Set whether a namespace is archived
* [setVisibility](docs/sdks/artifacts/README.md#setvisibility) - Set visibility of a namespace with an existing metadata entry

### [auth](docs/sdks/auth/README.md)

* [getAccess](docs/sdks/auth/README.md#getaccess) - Get access allowances for a particular workspace
* [getAccessToken](docs/sdks/auth/README.md#getaccesstoken) - Get or refresh an access token for the current workspace.
* [getUser](docs/sdks/auth/README.md#getuser) - Get information about the current user.
* [validateApiKey](docs/sdks/auth/README.md#validateapikey) - Validate the current api key.

### [codeSamples](docs/sdks/codesamples/README.md)

* [generateCodeSamplePreview](docs/sdks/codesamples/README.md#generatecodesamplepreview) - Generate Code Sample previews from a file and configuration parameters.
* [generateCodeSamplePreviewAsync](docs/sdks/codesamples/README.md#generatecodesamplepreviewasync) - Initiate asynchronous Code Sample preview generation from a file and configuration parameters, receiving an async JobID response for polling.
* [get](docs/sdks/codesamples/README.md#get) - Retrieve usage snippets
* [getCodeSamplePreviewAsync](docs/sdks/codesamples/README.md#getcodesamplepreviewasync) - Poll for the result of an asynchronous Code Sample preview generation.

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
* [getSetup](docs/sdks/github/README.md#getsetup)
* [linkGithub](docs/sdks/github/README.md#linkgithub)
* [storePublishingSecrets](docs/sdks/github/README.md#storepublishingsecrets)
* [triggerAction](docs/sdks/github/README.md#triggeraction)

### [organizations](docs/sdks/organizations/README.md)

* [create](docs/sdks/organizations/README.md#create) - Create an organization
* [createBillingAddOns](docs/sdks/organizations/README.md#createbillingaddons) - Create billing add ons
* [createFreeTrial](docs/sdks/organizations/README.md#createfreetrial) - Create a free trial for an organization
* [deleteBillingAddOn](docs/sdks/organizations/README.md#deletebillingaddon) - Delete billing add ons
* [get](docs/sdks/organizations/README.md#get) - Get organization
* [getAll](docs/sdks/organizations/README.md#getall) - Get organizations for a user
* [getBillingAddOns](docs/sdks/organizations/README.md#getbillingaddons) - Get billing add ons
* [getUsage](docs/sdks/organizations/README.md#getusage) - Get billing usage summary for a particular organization

### [publishingTokens](docs/sdks/publishingtokens/README.md)

* [create](docs/sdks/publishingtokens/README.md#create) - Create a publishing token for a workspace
* [delete](docs/sdks/publishingtokens/README.md#delete) - Delete a specific publishing token
* [get](docs/sdks/publishingtokens/README.md#get) - Get a specific publishing token
* [list](docs/sdks/publishingtokens/README.md#list) - Get publishing tokens for a workspace
* [resolveMetadata](docs/sdks/publishingtokens/README.md#resolvemetadata) - Get metadata about the token
* [resolveTarget](docs/sdks/publishingtokens/README.md#resolvetarget) - Get a specific publishing token target
* [update](docs/sdks/publishingtokens/README.md#update) - Updates the validitity period of a publishing token

### [reports](docs/sdks/reports/README.md)

* [getChangesReportSignedUrl](docs/sdks/reports/README.md#getchangesreportsignedurl) - Get the signed access url for the change reports for a particular document.
* [getLintingReportSignedUrl](docs/sdks/reports/README.md#getlintingreportsignedurl) - Get the signed access url for the linting reports for a particular document.
* [uploadReport](docs/sdks/reports/README.md#uploadreport) - Upload a report.

### [schemaStore](docs/sdks/schemastore/README.md)

* [createSchemaStoreItem](docs/sdks/schemastore/README.md#createschemastoreitem) - Create a schema in the schema store

### [shortURLs](docs/sdks/shorturls/README.md)

* [create](docs/sdks/shorturls/README.md#create) - Shorten a URL.


### [subscriptions](docs/sdks/subscriptions/README.md)

* [activateSubscriptionNamespace](docs/sdks/subscriptions/README.md#activatesubscriptionnamespace) - Activate an ignored namespace for a subscription
* [ignoreSubscriptionNamespace](docs/sdks/subscriptions/README.md#ignoresubscriptionnamespace) - Ignored a namespace for a subscription

### [suggest](docs/sdks/suggest/README.md)

* [suggest](docs/sdks/suggest/README.md#suggest) - Generate suggestions for improving an OpenAPI document.
* [suggestItems](docs/sdks/suggest/README.md#suggestitems) - Generate generic suggestions for a list of items.
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
* [setFeatureFlags](docs/sdks/workspaces/README.md#setfeatureflags) - Set workspace feature flags
* [update](docs/sdks/workspaces/README.md#update) - Update workspace details
* [updateSettings](docs/sdks/workspaces/README.md#updatesettings) - Update workspace settings

</details>
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

[`SpeakeasyError`](./src/sdk/models/errors/speakeasyerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import * as errors from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/errors";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  try {
    await speakeasy.artifacts.createRemoteSource();
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SpeakeasyError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorT) {
        console.log(error.data$.message); // string
        console.log(error.data$.statusCode); // number
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`SpeakeasyError`](./src/sdk/models/errors/speakeasyerror.ts): The base class for HTTP error responses.
  * [`ErrorT`](docs/sdk/models/errors/errort.md): The `Status` type defines a logical error model. *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`SpeakeasyError`](./src/sdk/models/errors/speakeasyerror.ts)**:
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name   | Server                           | Description |
| ------ | -------------------------------- | ----------- |
| `prod` | `https://api.prod.speakeasy.com` |             |

#### Example

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  server: "prod",
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await speakeasy.artifacts.createRemoteSource();
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  serverURL: "https://api.prod.speakeasy.com",
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await speakeasy.artifacts.createRemoteSource();
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

| Name                  | Type   | Scheme      |
| --------------------- | ------ | ----------- |
| `apiKey`              | apiKey | API key     |
| `bearer`              | http   | HTTP Bearer |
| `workspaceIdentifier` | apiKey | API key     |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await speakeasy.artifacts.createRemoteSource();
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
  await speakeasy.artifacts.createRemoteSource({
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
  await speakeasy.artifacts.createRemoteSource();
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

- [`artifactsCreateRemoteSource`](docs/sdks/artifacts/README.md#createremotesource) - Configure a new remote source
- [`artifactsGetBlob`](docs/sdks/artifacts/README.md#getblob) - Get blob for a particular digest
- [`artifactsGetManifest`](docs/sdks/artifacts/README.md#getmanifest) - Get manifest for a particular reference
- [`artifactsGetNamespaces`](docs/sdks/artifacts/README.md#getnamespaces) - Each namespace contains many revisions.
- [`artifactsGetRevisions`](docs/sdks/artifacts/README.md#getrevisions)
- [`artifactsGetTags`](docs/sdks/artifacts/README.md#gettags)
- [`artifactsListRemoteSources`](docs/sdks/artifacts/README.md#listremotesources) - Get remote sources attached to a particular namespace
- [`artifactsPostTags`](docs/sdks/artifacts/README.md#posttags) - Add tags to an existing revision
- [`artifactsPreflight`](docs/sdks/artifacts/README.md#preflight) - Get access token for communicating with OCI distribution endpoints
- [`artifactsSetArchived`](docs/sdks/artifacts/README.md#setarchived) - Set whether a namespace is archived
- [`artifactsSetVisibility`](docs/sdks/artifacts/README.md#setvisibility) - Set visibility of a namespace with an existing metadata entry
- [`authGetAccess`](docs/sdks/auth/README.md#getaccess) - Get access allowances for a particular workspace
- [`authGetAccessToken`](docs/sdks/auth/README.md#getaccesstoken) - Get or refresh an access token for the current workspace.
- [`authGetUser`](docs/sdks/auth/README.md#getuser) - Get information about the current user.
- [`authValidateApiKey`](docs/sdks/auth/README.md#validateapikey) - Validate the current api key.
- [`codeSamplesGenerateCodeSamplePreview`](docs/sdks/codesamples/README.md#generatecodesamplepreview) - Generate Code Sample previews from a file and configuration parameters.
- [`codeSamplesGenerateCodeSamplePreviewAsync`](docs/sdks/codesamples/README.md#generatecodesamplepreviewasync) - Initiate asynchronous Code Sample preview generation from a file and configuration parameters, receiving an async JobID response for polling.
- [`codeSamplesGet`](docs/sdks/codesamples/README.md#get) - Retrieve usage snippets
- [`codeSamplesGetCodeSamplePreviewAsync`](docs/sdks/codesamples/README.md#getcodesamplepreviewasync) - Poll for the result of an asynchronous Code Sample preview generation.
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
- [`githubGetSetup`](docs/sdks/github/README.md#getsetup)
- [`githubLinkGithub`](docs/sdks/github/README.md#linkgithub)
- [`githubStorePublishingSecrets`](docs/sdks/github/README.md#storepublishingsecrets)
- [`githubTriggerAction`](docs/sdks/github/README.md#triggeraction)
- [`organizationsCreate`](docs/sdks/organizations/README.md#create) - Create an organization
- [`organizationsCreateBillingAddOns`](docs/sdks/organizations/README.md#createbillingaddons) - Create billing add ons
- [`organizationsCreateFreeTrial`](docs/sdks/organizations/README.md#createfreetrial) - Create a free trial for an organization
- [`organizationsDeleteBillingAddOn`](docs/sdks/organizations/README.md#deletebillingaddon) - Delete billing add ons
- [`organizationsGet`](docs/sdks/organizations/README.md#get) - Get organization
- [`organizationsGetAll`](docs/sdks/organizations/README.md#getall) - Get organizations for a user
- [`organizationsGetBillingAddOns`](docs/sdks/organizations/README.md#getbillingaddons) - Get billing add ons
- [`organizationsGetUsage`](docs/sdks/organizations/README.md#getusage) - Get billing usage summary for a particular organization
- [`publishingTokensCreate`](docs/sdks/publishingtokens/README.md#create) - Create a publishing token for a workspace
- [`publishingTokensDelete`](docs/sdks/publishingtokens/README.md#delete) - Delete a specific publishing token
- [`publishingTokensGet`](docs/sdks/publishingtokens/README.md#get) - Get a specific publishing token
- [`publishingTokensList`](docs/sdks/publishingtokens/README.md#list) - Get publishing tokens for a workspace
- [`publishingTokensResolveMetadata`](docs/sdks/publishingtokens/README.md#resolvemetadata) - Get metadata about the token
- [`publishingTokensResolveTarget`](docs/sdks/publishingtokens/README.md#resolvetarget) - Get a specific publishing token target
- [`publishingTokensUpdate`](docs/sdks/publishingtokens/README.md#update) - Updates the validitity period of a publishing token
- [`reportsGetChangesReportSignedUrl`](docs/sdks/reports/README.md#getchangesreportsignedurl) - Get the signed access url for the change reports for a particular document.
- [`reportsGetLintingReportSignedUrl`](docs/sdks/reports/README.md#getlintingreportsignedurl) - Get the signed access url for the linting reports for a particular document.
- [`reportsUploadReport`](docs/sdks/reports/README.md#uploadreport) - Upload a report.
- [`schemaStoreCreateSchemaStoreItem`](docs/sdks/schemastore/README.md#createschemastoreitem) - Create a schema in the schema store
- [`shortURLsCreate`](docs/sdks/shorturls/README.md#create) - Shorten a URL.
- [`subscriptionsActivateSubscriptionNamespace`](docs/sdks/subscriptions/README.md#activatesubscriptionnamespace) - Activate an ignored namespace for a subscription
- [`subscriptionsIgnoreSubscriptionNamespace`](docs/sdks/subscriptions/README.md#ignoresubscriptionnamespace) - Ignored a namespace for a subscription
- [`suggestSuggest`](docs/sdks/suggest/README.md#suggest) - Generate suggestions for improving an OpenAPI document.
- [`suggestSuggestItems`](docs/sdks/suggest/README.md#suggestitems) - Generate generic suggestions for a list of items.
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
- [`workspacesSetFeatureFlags`](docs/sdks/workspaces/README.md#setfeatureflags) - Set workspace feature flags
- [`workspacesUpdate`](docs/sdks/workspaces/README.md#update) - Update workspace details
- [`workspacesUpdateSettings`](docs/sdks/workspaces/README.md#updatesettings) - Update workspace settings

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start React hooks with TanStack Query [react-query] -->
## React hooks with TanStack Query

React hooks built on [TanStack Query][tanstack-query] are included in this SDK.
These hooks and the utility functions provided alongside them can be used to
build rich applications that pull data from the API using one of the most
popular asynchronous state management library.

[tanstack-query]: https://tanstack.com/query/v5/docs/framework/react/overview

To learn about this feature and how to get started, check
[REACT_QUERY.md](./REACT_QUERY.md).

> [!WARNING]
>
> This feature is currently in **preview** and is subject to breaking changes
> within the current major version of the SDK as we gather user feedback on it.

<details>

<summary>Available React hooks</summary>

- [`useArtifactsCreateRemoteSourceMutation`](docs/sdks/artifacts/README.md#createremotesource) - Configure a new remote source
- [`useArtifactsGetBlob`](docs/sdks/artifacts/README.md#getblob) - Get blob for a particular digest
- [`useArtifactsGetManifest`](docs/sdks/artifacts/README.md#getmanifest) - Get manifest for a particular reference
- [`useArtifactsGetNamespaces`](docs/sdks/artifacts/README.md#getnamespaces) - Each namespace contains many revisions.
- [`useArtifactsGetRevisions`](docs/sdks/artifacts/README.md#getrevisions)
- [`useArtifactsGetTags`](docs/sdks/artifacts/README.md#gettags)
- [`useArtifactsListRemoteSources`](docs/sdks/artifacts/README.md#listremotesources) - Get remote sources attached to a particular namespace
- [`useArtifactsPostTagsMutation`](docs/sdks/artifacts/README.md#posttags) - Add tags to an existing revision
- [`useArtifactsPreflightMutation`](docs/sdks/artifacts/README.md#preflight) - Get access token for communicating with OCI distribution endpoints
- [`useArtifactsSetArchivedMutation`](docs/sdks/artifacts/README.md#setarchived) - Set whether a namespace is archived
- [`useArtifactsSetVisibilityMutation`](docs/sdks/artifacts/README.md#setvisibility) - Set visibility of a namespace with an existing metadata entry
- [`useAuthGetAccess`](docs/sdks/auth/README.md#getaccess) - Get access allowances for a particular workspace
- [`useAuthGetAccessToken`](docs/sdks/auth/README.md#getaccesstoken) - Get or refresh an access token for the current workspace.
- [`useAuthGetUser`](docs/sdks/auth/README.md#getuser) - Get information about the current user.
- [`useAuthValidateApiKey`](docs/sdks/auth/README.md#validateapikey) - Validate the current api key.
- [`useCodeSamplesGenerateCodeSamplePreviewAsyncMutation`](docs/sdks/codesamples/README.md#generatecodesamplepreviewasync) - Initiate asynchronous Code Sample preview generation from a file and configuration parameters, receiving an async JobID response for polling.
- [`useCodeSamplesGenerateCodeSamplePreviewMutation`](docs/sdks/codesamples/README.md#generatecodesamplepreview) - Generate Code Sample previews from a file and configuration parameters.
- [`useCodeSamplesGet`](docs/sdks/codesamples/README.md#get) - Retrieve usage snippets
- [`useCodeSamplesGetCodeSamplePreviewAsync`](docs/sdks/codesamples/README.md#getcodesamplepreviewasync) - Poll for the result of an asynchronous Code Sample preview generation.
- [`useEventsGetEventsByTarget`](docs/sdks/events/README.md#geteventsbytarget) - Load recent events for a particular workspace
- [`useEventsGetTargets`](docs/sdks/events/README.md#gettargets) - Load targets for a particular workspace
- [`useEventsGetTargetsDeprecated`](docs/sdks/events/README.md#gettargetsdeprecated) - Load targets for a particular workspace
- [`useEventsPostMutation`](docs/sdks/events/README.md#post) - Post events for a specific workspace
- [`useEventsSearch`](docs/sdks/events/README.md#search) - Search events for a particular workspace by any field
- [`useGithubCheckAccess`](docs/sdks/github/README.md#checkaccess)
- [`useGithubCheckPublishingPRs`](docs/sdks/github/README.md#checkpublishingprs)
- [`useGithubCheckPublishingSecrets`](docs/sdks/github/README.md#checkpublishingsecrets)
- [`useGithubConfigureCodeSamplesMutation`](docs/sdks/github/README.md#configurecodesamples)
- [`useGithubConfigureMintlifyRepoMutation`](docs/sdks/github/README.md#configuremintlifyrepo)
- [`useGithubConfigureTargetMutation`](docs/sdks/github/README.md#configuretarget)
- [`useGithubGetAction`](docs/sdks/github/README.md#getaction)
- [`useGithubGetSetup`](docs/sdks/github/README.md#getsetup)
- [`useGithubLinkGithubMutation`](docs/sdks/github/README.md#linkgithub)
- [`useGithubStorePublishingSecretsMutation`](docs/sdks/github/README.md#storepublishingsecrets)
- [`useGithubTriggerActionMutation`](docs/sdks/github/README.md#triggeraction)
- [`useOrganizationsCreateBillingAddOnsMutation`](docs/sdks/organizations/README.md#createbillingaddons) - Create billing add ons
- [`useOrganizationsCreateFreeTrialMutation`](docs/sdks/organizations/README.md#createfreetrial) - Create a free trial for an organization
- [`useOrganizationsCreateMutation`](docs/sdks/organizations/README.md#create) - Create an organization
- [`useOrganizationsDeleteBillingAddOnMutation`](docs/sdks/organizations/README.md#deletebillingaddon) - Delete billing add ons
- [`useOrganizationsGet`](docs/sdks/organizations/README.md#get) - Get organization
- [`useOrganizationsGetAll`](docs/sdks/organizations/README.md#getall) - Get organizations for a user
- [`useOrganizationsGetBillingAddOns`](docs/sdks/organizations/README.md#getbillingaddons) - Get billing add ons
- [`useOrganizationsGetUsage`](docs/sdks/organizations/README.md#getusage) - Get billing usage summary for a particular organization
- [`usePublishingTokensCreateMutation`](docs/sdks/publishingtokens/README.md#create) - Create a publishing token for a workspace
- [`usePublishingTokensDeleteMutation`](docs/sdks/publishingtokens/README.md#delete) - Delete a specific publishing token
- [`usePublishingTokensGet`](docs/sdks/publishingtokens/README.md#get) - Get a specific publishing token
- [`usePublishingTokensList`](docs/sdks/publishingtokens/README.md#list) - Get publishing tokens for a workspace
- [`usePublishingTokensResolveMetadata`](docs/sdks/publishingtokens/README.md#resolvemetadata) - Get metadata about the token
- [`usePublishingTokensResolveTarget`](docs/sdks/publishingtokens/README.md#resolvetarget) - Get a specific publishing token target
- [`usePublishingTokensUpdateMutation`](docs/sdks/publishingtokens/README.md#update) - Updates the validitity period of a publishing token
- [`useReportsGetChangesReportSignedUrl`](docs/sdks/reports/README.md#getchangesreportsignedurl) - Get the signed access url for the change reports for a particular document.
- [`useReportsGetLintingReportSignedUrl`](docs/sdks/reports/README.md#getlintingreportsignedurl) - Get the signed access url for the linting reports for a particular document.
- [`useReportsUploadReportMutation`](docs/sdks/reports/README.md#uploadreport) - Upload a report.
- [`useSchemaStoreCreateSchemaStoreItemMutation`](docs/sdks/schemastore/README.md#createschemastoreitem) - Create a schema in the schema store
- [`useShortURLsCreateMutation`](docs/sdks/shorturls/README.md#create) - Shorten a URL.
- [`useSubscriptionsActivateSubscriptionNamespaceMutation`](docs/sdks/subscriptions/README.md#activatesubscriptionnamespace) - Activate an ignored namespace for a subscription
- [`useSubscriptionsIgnoreSubscriptionNamespaceMutation`](docs/sdks/subscriptions/README.md#ignoresubscriptionnamespace) - Ignored a namespace for a subscription
- [`useSuggestSuggestItemsMutation`](docs/sdks/suggest/README.md#suggestitems) - Generate generic suggestions for a list of items.
- [`useSuggestSuggestMutation`](docs/sdks/suggest/README.md#suggest) - Generate suggestions for improving an OpenAPI document.
- [`useSuggestSuggestOpenAPIMutation`](docs/sdks/suggest/README.md#suggestopenapi) - (DEPRECATED) Generate suggestions for improving an OpenAPI document.
- [`useSuggestSuggestOpenAPIRegistryMutation`](docs/sdks/suggest/README.md#suggestopenapiregistry) - Generate suggestions for improving an OpenAPI document stored in the registry.
- [`useWorkspacesCreateMutation`](docs/sdks/workspaces/README.md#create) - Create a workspace
- [`useWorkspacesCreateTokenMutation`](docs/sdks/workspaces/README.md#createtoken) - Create a token for a particular workspace
- [`useWorkspacesDeleteTokenMutation`](docs/sdks/workspaces/README.md#deletetoken) - Delete a token for a particular workspace
- [`useWorkspacesGet`](docs/sdks/workspaces/README.md#get) - Get workspace by context
- [`useWorkspacesGetAll`](docs/sdks/workspaces/README.md#getall) - Get workspaces for a user
- [`useWorkspacesGetByID`](docs/sdks/workspaces/README.md#getbyid) - Get workspace
- [`useWorkspacesGetFeatureFlags`](docs/sdks/workspaces/README.md#getfeatureflags) - Get workspace feature flags
- [`useWorkspacesGetSettings`](docs/sdks/workspaces/README.md#getsettings) - Get workspace settings
- [`useWorkspacesGetTeam`](docs/sdks/workspaces/README.md#getteam) - Get team members for a particular workspace
- [`useWorkspacesGetTokens`](docs/sdks/workspaces/README.md#gettokens) - Get tokens for a particular workspace
- [`useWorkspacesGrantAccessMutation`](docs/sdks/workspaces/README.md#grantaccess) - Grant a user access to a particular workspace
- [`useWorkspacesRevokeAccessMutation`](docs/sdks/workspaces/README.md#revokeaccess) - Revoke a user's access to a particular workspace
- [`useWorkspacesSetFeatureFlagsMutation`](docs/sdks/workspaces/README.md#setfeatureflags) - Set workspace feature flags
- [`useWorkspacesUpdateMutation`](docs/sdks/workspaces/README.md#update) - Update workspace details
- [`useWorkspacesUpdateSettingsMutation`](docs/sdks/workspaces/README.md#updatesettings) - Update workspace settings

</details>
<!-- End React hooks with TanStack Query [react-query] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `workspace_id` to `"<id>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `getAccessToken`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.

| Name        | Type   | Description                |
| ----------- | ------ | -------------------------- |
| workspaceId | string | The workspaceId parameter. |

### Example

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  workspaceId: "<id>",
});

async function run() {
  const result = await speakeasy.auth.getAccessToken({
    workspaceId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

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
  const result = await speakeasy.codeSamples.generateCodeSamplePreview({
    language: "<value>",
    schemaFile: await openAsBlob("example.file"),
  });

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
