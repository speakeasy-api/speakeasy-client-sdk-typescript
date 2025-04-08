# UsageSnippets

## Example Usage

```typescript
import { UsageSnippets } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: UsageSnippets = {
  snippets: [
    {
      code: "<value>",
      language: "<value>",
      method: "<value>",
      operationId: "<id>",
      path: "/Library",
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `snippets`                                                          | [shared.UsageSnippet](../../../sdk/models/shared/usagesnippet.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |