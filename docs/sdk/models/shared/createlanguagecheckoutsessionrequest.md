# CreateLanguageCheckoutSessionRequest

## Example Usage

```typescript
import { CreateLanguageCheckoutSessionRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: CreateLanguageCheckoutSessionRequest = {
  cancelUrl: "https://misguided-fun.com",
  languages: [
    "<value 1>",
  ],
  successUrl: "https://lawful-colonialism.name",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `billingInterval`                                                       | [shared.BillingInterval](../../../sdk/models/shared/billinginterval.md) | :heavy_minus_sign:                                                      | Billing interval (defaults to month)                                    |
| `cancelUrl`                                                             | *string*                                                                | :heavy_check_mark:                                                      | URL to redirect to if checkout is canceled                              |
| `languages`                                                             | *string*[]                                                              | :heavy_check_mark:                                                      | List of languages to activate                                           |
| `successUrl`                                                            | *string*                                                                | :heavy_check_mark:                                                      | URL to redirect to on successful checkout                               |