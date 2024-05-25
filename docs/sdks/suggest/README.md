# Suggest
(*suggest*)

## Overview

REST APIs for managing LLM OAS suggestions

### Available Operations

* [suggestOperationIDs](#suggestoperationids) - Generate operation ID suggestions.

## suggestOperationIDs

Get suggestions from an LLM model for improving the operationIDs in the provided schema.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DepthStyle, Style } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

async function run() {
  const sdk = new Speakeasy({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.suggest.suggestOperationIDs({
    opts: {},
    schema: {
      content: new TextEncoder().encode("0xb2de88c98a"),
      fileName: "your_file_here",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.SuggestOperationIDsRequestBody](../../sdk/models/operations/suggestoperationidsrequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.SuggestOperationIDsResponse](../../sdk/models/operations/suggestoperationidsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
