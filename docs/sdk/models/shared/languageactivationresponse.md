# LanguageActivationResponse

## Example Usage

```typescript
import { LanguageActivationResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: LanguageActivationResponse = {
  deactivated: true,
  language: "<value>",
  success: false,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `billingStatus`                                                                     | [shared.LanguageBillingStatus](../../../sdk/models/shared/languagebillingstatus.md) | :heavy_minus_sign:                                                                  | The billing status of a language                                                    |
| `deactivated`                                                                       | *boolean*                                                                           | :heavy_check_mark:                                                                  | Whether the language is deactivated                                                 |
| `language`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | The target language                                                                 |
| `message`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | Additional message about the operation                                              |
| `requiresCheckout`                                                                  | *boolean*                                                                           | :heavy_minus_sign:                                                                  | If true, user must complete checkout                                                |
| `success`                                                                           | *boolean*                                                                           | :heavy_check_mark:                                                                  | Whether the operation was successful                                                |