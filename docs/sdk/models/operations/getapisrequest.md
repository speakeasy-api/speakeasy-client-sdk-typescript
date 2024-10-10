# GetApisRequest

## Example Usage

```typescript
import { GetApisRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetApisRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `op`                                                                      | [operations.QueryParamOp](../../../sdk/models/operations/queryparamop.md) | :heavy_minus_sign:                                                        | Configuration for filter operations                                       |
| `metadata`                                                                | Record<string, *string*[]>                                                | :heavy_minus_sign:                                                        | Metadata to filter Apis on                                                |