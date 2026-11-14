# HandleCheckoutCallbackRequest

## Example Usage

```typescript
import { HandleCheckoutCallbackRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: HandleCheckoutCallbackRequest = {
  sessionId: "<id>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `sessionId`                    | *string*                       | :heavy_check_mark:             | The Stripe checkout session ID |