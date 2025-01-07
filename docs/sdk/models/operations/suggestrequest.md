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
          "/opt/bin",
        ],
        type: "<value>",
      },
    ],
    oasSummary: {
      info: {
        description: "hence runny knavishly egg keenly",
        license: {},
        summary: "<value>",
        title: "<value>",
        version: "<value>",
      },
      operations: [
        {
          description: "traffic ouch substantiate into",
          method: "<value>",
          operationId: "<id>",
          path: "/var/log",
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