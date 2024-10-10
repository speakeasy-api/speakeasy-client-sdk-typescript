# QueryParamOp

Configuration for filter operations

## Example Usage

```typescript
import { QueryParamOp } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: QueryParamOp = {
  and: false,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `and`                            | *boolean*                        | :heavy_check_mark:               | Whether to AND or OR the filters |