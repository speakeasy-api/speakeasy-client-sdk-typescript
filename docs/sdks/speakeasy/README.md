# Speakeasy SDK

## Overview

Speakeasy API: The Subscriptions API manages subscriptions for CLI and registry events

The Speakeasy Platform Documentation
</docs>

### Available Operations

* [generateCodeSamplePreview](#generatecodesamplepreview) - Generate Code Sample previews from a file and configuration parameters.
* [generateCodeSamplePreviewAsync](#generatecodesamplepreviewasync) - Initiate asynchronous Code Sample preview generation from a file and configuration parameters, receiving an async JobID response for polling.
* [getCodeSamplePreviewAsync](#getcodesamplepreviewasync) - Poll for the result of an asynchronous Code Sample preview generation.

## generateCodeSamplePreview

This endpoint generates Code Sample previews from a file and configuration parameters.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { openAsBlob } from "node:fs";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.generateCodeSamplePreview({
    languages: [
      "<value>",
      "<value>",
    ],
    schemaFile: await openAsBlob("example.file"),
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "@speakeasy-api/speakeasy-client-sdk-typescript/core.js";
import { generateCodeSamplePreview } from "@speakeasy-api/speakeasy-client-sdk-typescript/funcs/generateCodeSamplePreview.js";
import { openAsBlob } from "node:fs";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await generateCodeSamplePreview(speakeasy, {
    languages: [
      "<value>",
      "<value>",
    ],
    schemaFile: await openAsBlob("example.file"),
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CodeSampleSchemaInput](../../sdk/models/shared/codesampleschemainput.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateCodeSamplePreviewResponse](../../sdk/models/operations/generatecodesamplepreviewresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## generateCodeSamplePreviewAsync

This endpoint generates Code Sample previews from a file and configuration parameters, receiving an async JobID response for polling.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { openAsBlob } from "node:fs";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.generateCodeSamplePreviewAsync({
    languages: [
      "<value>",
      "<value>",
      "<value>",
    ],
    schemaFile: await openAsBlob("example.file"),
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "@speakeasy-api/speakeasy-client-sdk-typescript/core.js";
import { generateCodeSamplePreviewAsync } from "@speakeasy-api/speakeasy-client-sdk-typescript/funcs/generateCodeSamplePreviewAsync.js";
import { openAsBlob } from "node:fs";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await generateCodeSamplePreviewAsync(speakeasy, {
    languages: [
      "<value>",
      "<value>",
      "<value>",
    ],
    schemaFile: await openAsBlob("example.file"),
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CodeSampleSchemaInput](../../sdk/models/shared/codesampleschemainput.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateCodeSamplePreviewAsyncResponse](../../sdk/models/operations/generatecodesamplepreviewasyncresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCodeSamplePreviewAsync

Poll for the result of an asynchronous Code Sample preview generation.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.getCodeSamplePreviewAsync({
    jobID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "@speakeasy-api/speakeasy-client-sdk-typescript/core.js";
import { getCodeSamplePreviewAsync } from "@speakeasy-api/speakeasy-client-sdk-typescript/funcs/getCodeSamplePreviewAsync.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await getCodeSamplePreviewAsync(speakeasy, {
    jobID: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCodeSamplePreviewAsyncRequest](../../sdk/models/operations/getcodesamplepreviewasyncrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCodeSamplePreviewAsyncResponse](../../sdk/models/operations/getcodesamplepreviewasyncresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |