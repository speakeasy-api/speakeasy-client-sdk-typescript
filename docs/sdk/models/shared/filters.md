# Filters

Filters are used to query requests.

## Example Usage

```typescript
import { Filters } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Filters = {
  filters: [
    {
      key: "<key>",
      operator: "<value>",
      value: "<value>",
    },
  ],
  limit: 981830,
  offset: 478370,
  operator: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `filters`                                               | [shared.Filter](../../../sdk/models/shared/filter.md)[] | :heavy_check_mark:                                      | A list of filters to apply to the query.                |
| `limit`                                                 | *number*                                                | :heavy_check_mark:                                      | The maximum number of results to return.                |
| `offset`                                                | *number*                                                | :heavy_check_mark:                                      | The offset to start the query from.                     |
| `operator`                                              | *string*                                                | :heavy_check_mark:                                      | The operator to use when combining filters.             |