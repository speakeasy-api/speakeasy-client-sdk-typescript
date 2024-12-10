# SuggestRequest

## Example Usage

```typescript
import { SuggestRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: SuggestRequest = {
  xSessionId: "<id>",
  suggestRequestBody: {
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
        description: "other insignificant woot purse salty even",
        license: {},
        summary: "<value>",
        title: "<value>",
        version: "<value>",
      },
      operations: [
        {
          description: "ha intensely settle pluck shallow meh instead",
          method: "<value>",
          operationId: "<id>",
          path: "/etc/ppp",
          tags: [
            "<value>",
          ],
        },
      ],
    },
    suggestionType: "method-names",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `xSessionId`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `suggestRequestBody`                                                          | [shared.SuggestRequestBody](../../../sdk/models/shared/suggestrequestbody.md) | :heavy_check_mark:                                                            | The OAS summary and diagnostics to use for the suggestion.                    |