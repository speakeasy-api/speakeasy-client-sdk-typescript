# UsageSnippet

## Example Usage

```typescript
import { UsageSnippet } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: UsageSnippet = {
  code: "<value>",
  language: "<value>",
  operationId: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `code`                           | *string*                         | :heavy_check_mark:               | The code snippet                 |
| `language`                       | *string*                         | :heavy_check_mark:               | The language of the snippet      |
| `operationId`                    | *string*                         | :heavy_check_mark:               | The operation ID for the snippet |