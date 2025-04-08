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
          "/var/mail",
        ],
        type: "<value>",
      },
    ],
    oasSummary: {
      info: {
        description: "circa excepting upon",
        license: {},
        summary: "<value>",
        title: "<value>",
        version: "<value>",
      },
      operations: [
        {
          description:
            "even oddly overconfidently spanish wherever strait knowledgeably hopeful huzzah",
          method: "<value>",
          operationId: "<id>",
          path: "/home/user/dir",
          tags: [
            "<value>",
          ],
        },
      ],
    },
    suggestionType: "diagnostics-only",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `xSessionId`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `suggestRequestBody`                                                          | [shared.SuggestRequestBody](../../../sdk/models/shared/suggestrequestbody.md) | :heavy_check_mark:                                                            | The OAS summary and diagnostics to use for the suggestion.                    |