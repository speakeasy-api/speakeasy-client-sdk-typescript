# Op

Configuration for filter operations

## Example Usage

```typescript
import { Op } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: Op = {
  and: false,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `and`                            | *boolean*                        | :heavy_check_mark:               | Whether to AND or OR the filters |