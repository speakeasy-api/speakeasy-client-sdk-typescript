# Artifacts
(*artifacts*)

### Available Operations

* [getNamespaces](#getnamespaces) - Each namespace contains many revisions.
* [getRevisions](#getrevisions)
* [preflight](#preflight) - Get access token for communicating with OCI distribution endpoints

## getNamespaces

Each namespace contains many revisions.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

async function run() {
  const sdk = new Speakeasy({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
    workspaceID: "<value>",
  });

  const res = await sdk.artifacts.getNamespaces();

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

**Promise<[operations.GetNamespacesResponse](../../sdk/models/operations/getnamespacesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getRevisions

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

async function run() {
  const sdk = new Speakeasy({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
    workspaceID: "<value>",
  });

  const res = await sdk.artifacts.getRevisions({
    namespaceId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetRevisionsRequest](../../sdk/models/operations/getrevisionsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetRevisionsResponse](../../sdk/models/operations/getrevisionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## preflight

Get access token for communicating with OCI distribution endpoints

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

async function run() {
  const sdk = new Speakeasy({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
    workspaceID: "<value>",
  });

  const res = await sdk.artifacts.preflight();

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

**Promise<[operations.PreflightResponse](../../sdk/models/operations/preflightresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
