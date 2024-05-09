# Auth
(*auth*)

## Overview

REST APIs for managing Authentication

### Available Operations

* [getAccessToken](#getaccesstoken) - Get or refresh an access token for the current workspace.
* [getUser](#getuser) - Get information about the current user.
* [getWorkspaceAccess](#getworkspaceaccess) - Get access allowances for a particular workspace
* [validateApiKey](#validateapikey) - Validate the current api key.

## getAccessToken

Get or refresh an access token for the current workspace.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

async function run() {
  const sdk = new Speakeasy();

  const res = await sdk.auth.getAccessToken({
    workspaceId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetAccessTokenRequest](../../sdk/models/operations/getaccesstokenrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetAccessTokenResponse](../../sdk/models/operations/getaccesstokenresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUser

Get information about the current user.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

async function run() {
  const sdk = new Speakeasy({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.auth.getUser();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetUserResponse](../../sdk/models/operations/getuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getWorkspaceAccess

Checks if generation is permitted for a particular run of the CLI

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

async function run() {
  const sdk = new Speakeasy({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.auth.getWorkspaceAccess({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetWorkspaceAccessRequest](../../sdk/models/operations/getworkspaceaccessrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetWorkspaceAccessResponse](../../sdk/models/operations/getworkspaceaccessresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## validateApiKey

Validate the current api key.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

async function run() {
  const sdk = new Speakeasy({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.auth.validateApiKey();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ValidateApiKeyResponse](../../sdk/models/operations/validateapikeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
