# UsageSnippet

## Example Usage

```typescript
import { UsageSnippet } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: UsageSnippet = {
  code: "<value>",
  language: "<value>",
  method: "<value>",
  operationId: "<id>",
  path: "/private/tmp",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `code`                           | *string*                         | :heavy_check_mark:               | The code snippet                 |
| `language`                       | *string*                         | :heavy_check_mark:               | The language of the snippet      |
| `method`                         | *any*                            | :heavy_check_mark:               | The HTTP method of the operation |
| `operationId`                    | *string*                         | :heavy_check_mark:               | The operation ID for the snippet |
| `path`                           | *string*                         | :heavy_check_mark:               | The path of the operation        |