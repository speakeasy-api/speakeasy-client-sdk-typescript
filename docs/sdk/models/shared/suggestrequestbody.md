# SuggestRequestBody

## Example Usage

```typescript
import { SuggestRequestBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: SuggestRequestBody = {
  diagnostics: [
    {
      message: "<value>",
      path: [
        "/Applications",
      ],
      type: "<value>",
    },
  ],
  oasSummary: {
    info: {
      description:
        "observe barring where politely after horst vanadyl mmm ownership",
      license: {},
      summary: "<value>",
      title: "<value>",
      version: "<value>",
    },
    operations: [
      {
        description: "late quickly oof boo",
        method: "<value>",
        operationId: "<id>",
        path: "/var/mail",
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