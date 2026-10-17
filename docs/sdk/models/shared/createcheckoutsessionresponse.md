# CreateCheckoutSessionResponse

## Example Usage

```typescript
import { CreateCheckoutSessionResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: CreateCheckoutSessionResponse = {
  checkoutUrl: "https://sour-decision.name",
  sessionId: "<id>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `checkoutUrl`                  | *string*                       | :heavy_check_mark:             | The Stripe checkout URL        |
| `sessionId`                    | *string*                       | :heavy_check_mark:             | The Stripe checkout session ID |