# LanguageResponse

## Example Usage

```typescript
import { LanguageResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: LanguageResponse = {
  canDeactivate: true,
  deactivated: false,
  language: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `billingStatus`                                                                               | [shared.LanguageBillingStatus](../../../sdk/models/shared/languagebillingstatus.md)           | :heavy_minus_sign:                                                                            | The billing status of a language                                                              |
| `canDeactivate`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the language can be deactivated (false if within 2-week cooldown)                     |
| `deactivated`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the language is deactivated                                                           |
| `language`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The target language (e.g., typescript, python, go)                                            |
| `trialEndsAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the trial ends (if applicable)                                                           |