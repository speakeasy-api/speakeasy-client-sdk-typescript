# GetAllApiVersionsRequest

## Example Usage

```typescript
import { GetAllApiVersionsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetAllApiVersionsRequest = {
  apiID: "<id>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `apiID`                                               | *string*                                              | :heavy_check_mark:                                    | The ID of the Api to retrieve.                        |
| `op`                                                  | [operations.Op](../../../sdk/models/operations/op.md) | :heavy_minus_sign:                                    | Configuration for filter operations                   |
| `metadata`                                            | Record<string, *string*[]>                            | :heavy_minus_sign:                                    | Metadata to filter Apis on                            |