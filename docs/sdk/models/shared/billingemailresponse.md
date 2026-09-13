# BillingEmailResponse

## Example Usage

```typescript
import { BillingEmailResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: BillingEmailResponse = {
  hasStripeCustomer: true,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `billingEmail`                                                  | *string*                                                        | :heavy_minus_sign:                                              | The current billing email address (empty if no Stripe customer) |
| `hasStripeCustomer`                                             | *boolean*                                                       | :heavy_check_mark:                                              | Whether the organization has a linked Stripe customer           |