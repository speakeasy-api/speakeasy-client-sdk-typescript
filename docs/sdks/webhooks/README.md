# Webhooks

## Overview

Webhook endpoints for external service integrations

### Available Operations

* [handleStripeWebhook](#handlestripewebhook) - Handle Stripe webhook

## handleStripeWebhook

Receives and processes Stripe webhook events for subscription management.
This endpoint is called by Stripe and uses webhook signature verification instead of API authentication.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="handleStripeWebhook" method="post" path="/v1/webhooks/stripe" -->
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy();

async function run() {
  await speakeasy.webhooks.handleStripeWebhook({});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "@speakeasy-api/speakeasy-client-sdk-typescript/core.js";
import { webhooksHandleStripeWebhook } from "@speakeasy-api/speakeasy-client-sdk-typescript/funcs/webhooksHandleStripeWebhook.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await webhooksHandleStripeWebhook(speakeasy, {});
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("webhooksHandleStripeWebhook failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useWebhooksHandleStripeWebhookMutation
} from "@speakeasy-api/speakeasy-client-sdk-typescript/react-query/webhooksHandleStripeWebhook.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HandleStripeWebhookRequestBody](../../sdk/models/operations/handlestripewebhookrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |