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
          "/Users",
        ],
        type: "<value>",
      },
    ],
    oasSummary: {
      info: {
        description: "faithfully steel promptly pull optimistically",
        license: {},
        summary: "<value>",
        title: "<value>",
        version: "<value>",
      },
      operations: [
        {
          description: "separately content to as needily near",
          method: "<value>",
          operationId: "<id>",
          path: "/usr/include",
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