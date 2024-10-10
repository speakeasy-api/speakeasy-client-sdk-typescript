# Filter

A filter is a key-value pair that can be used to filter a list of requests.

## Example Usage

```typescript
import { Filter } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Filter = {
  key: "<key>",
  operator: "<value>",
  value: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `key`                       | *string*                    | :heavy_check_mark:          | The key of the filter.      |
| `operator`                  | *string*                    | :heavy_check_mark:          | The operator of the filter. |
| `value`                     | *string*                    | :heavy_check_mark:          | The value of the filter.    |