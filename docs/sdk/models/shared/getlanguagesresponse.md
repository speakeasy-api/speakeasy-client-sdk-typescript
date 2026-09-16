# GetLanguagesResponse

## Example Usage

```typescript
import { GetLanguagesResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GetLanguagesResponse = {
  languages: [
    {
      canDeactivate: false,
      deactivated: true,
      language: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `languages`                                                                 | [shared.LanguageResponse](../../../sdk/models/shared/languageresponse.md)[] | :heavy_check_mark:                                                          | List of language billing configurations                                     |