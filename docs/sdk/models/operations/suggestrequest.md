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
          "/lib",
        ],
        type: "<value>",
      },
    ],
    oasSummary: {
      info: {
        description: "tepid gratefully whoa antelope",
        license: {},
        summary: "<value>",
        title: "<value>",
        version: "<value>",
      },
      operations: [
        {
          description:
            "uselessly custody honesty huzzah valiantly skeleton uniform miserably",
          method: "<value>",
          operationId: "<id>",
          path: "/etc/namedb",
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