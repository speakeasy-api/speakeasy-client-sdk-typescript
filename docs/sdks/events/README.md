# Events
(*events*)

## Overview

REST APIs for capturing event data

### Available Operations

* [postWorkspaceEvents](#postworkspaceevents) - Post events for a specific workspace

## postWorkspaceEvents

Sends an array of events to be stored for a particular workspace.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GenerateBumpType, InteractionType } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/shared";

async function run() {
  const sdk = new Speakeasy({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
    workspaceID: "string",
  });

  const res = await sdk.events.postWorkspaceEvents({
    requestBody: [
      {
        createdAt: new Date("2024-11-21T06:58:42.120Z"),
        executionId: "string",
        id: "<ID>",
        interactionType: InteractionType.CliExec,
        localStartedAt: new Date("2024-05-07T12:35:47.182Z"),
        speakeasyApiKeyName: "string",
        speakeasyVersion: "string",
        success: false,
        workspaceId: "string",
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PostWorkspaceEventsRequest](../../sdk/models/operations/postworkspaceeventsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostWorkspaceEventsResponse](../../sdk/models/operations/postworkspaceeventsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
