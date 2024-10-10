# SuggestRequestBody

## Example Usage

```typescript
import { SuggestRequestBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: SuggestRequestBody = {
  diagnostics: [
    {
      message: "<value>",
      path: [
        "/usr/include",
      ],
      type: "<value>",
    },
  ],
  oasSummary: {
    info: {
      description: "knottily ethyl covenant",
      license: {},
      summary: "<value>",
      title: "<value>",
      version: "<value>",
    },
    operations: [
      {
        description:
          "politely after horst vanadyl mmm ownership toward curly about",
        method: "<value>",
        operationId: "<id>",
        path: "/var/spool",
        tags: [
          "<value>",
        ],
      },
    ],
  },
  suggestionType: "method-names",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `diagnostics`                                                                                             | [shared.Diagnostic](../../../sdk/models/shared/diagnostic.md)[]                                           | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `oasSummary`                                                                                              | [shared.OASSummary](../../../sdk/models/shared/oassummary.md)                                             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `suggestionType`                                                                                          | [shared.SuggestRequestBodySuggestionType](../../../sdk/models/shared/suggestrequestbodysuggestiontype.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |