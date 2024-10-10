# DeleteVersionMetadataRequest

## Example Usage

```typescript
import { DeleteVersionMetadataRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: DeleteVersionMetadataRequest = {
  apiID: "<id>",
  versionID: "<id>",
  metaKey: "<value>",
  metaValue: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `apiID`                                           | *string*                                          | :heavy_check_mark:                                | The ID of the Api to delete metadata for.         |
| `versionID`                                       | *string*                                          | :heavy_check_mark:                                | The version ID of the Api to delete metadata for. |
| `metaKey`                                         | *string*                                          | :heavy_check_mark:                                | The key of the metadata to delete.                |
| `metaValue`                                       | *string*                                          | :heavy_check_mark:                                | The value of the metadata to delete.              |