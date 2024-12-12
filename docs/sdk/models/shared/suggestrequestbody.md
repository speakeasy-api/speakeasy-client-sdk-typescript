# SuggestRequestBody

## Example Usage

```typescript
import { SuggestRequestBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: SuggestRequestBody = {
  diagnostics: [
    {
      message: "<value>",
      path: [
        "/etc/mail",
      ],
      type: "<value>",
    },
  ],
  oasSummary: {
    info: {
      description: "lavish solemnly near submissive whether aha",
      license: {},
      summary: "<value>",
      title: "<value>",
      version: "<value>",
    },
    operations: [
      {
        description:
          "gee fondly handful electronics mid athletic frequent and everlasting versus",
        method: "<value>",
        operationId: "<id>",
        path: "/tmp",
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