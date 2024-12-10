# SuggestRequestBody

## Example Usage

```typescript
import { SuggestRequestBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: SuggestRequestBody = {
  diagnostics: [
    {
      message: "<value>",
      path: [
        "/var/spool",
      ],
      type: "<value>",
    },
  ],
  oasSummary: {
    info: {
      description: "impish exalted late quickly",
      license: {},
      summary: "<value>",
      title: "<value>",
      version: "<value>",
    },
    operations: [
      {
        description: "by ick abaft adrenalin that reluctantly",
        method: "<value>",
        operationId: "<id>",
        path: "/lib",
        tags: [
          "<value>",
        ],
      },
    ],
  },
  suggestionType: "diagnostics-only",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `diagnostics`                                                                                             | [shared.Diagnostic](../../../sdk/models/shared/diagnostic.md)[]                                           | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `oasSummary`                                                                                              | [shared.OASSummary](../../../sdk/models/shared/oassummary.md)                                             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `suggestionType`                                                                                          | [shared.SuggestRequestBodySuggestionType](../../../sdk/models/shared/suggestrequestbodysuggestiontype.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |