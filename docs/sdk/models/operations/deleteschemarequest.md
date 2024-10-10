# DeleteSchemaRequest

## Example Usage

```typescript
import { DeleteSchemaRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: DeleteSchemaRequest = {
  apiID: "<id>",
  versionID: "<id>",
  revisionID: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `apiID`                                           | *string*                                          | :heavy_check_mark:                                | The ID of the Api to delete schemas for.          |
| `versionID`                                       | *string*                                          | :heavy_check_mark:                                | The version ID of the Api to delete metadata for. |
| `revisionID`                                      | *string*                                          | :heavy_check_mark:                                | The revision ID of the schema to delete.          |