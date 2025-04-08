# ErrorT

The `Status` type defines a logical error model

## Example Usage

```typescript
import { ErrorT } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: ErrorT = {
  message: "<value>",
  statusCode: 103,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `message`                         | *string*                          | :heavy_check_mark:                | A developer-facing error message. |
| `statusCode`                      | *number*                          | :heavy_check_mark:                | The HTTP status code              |