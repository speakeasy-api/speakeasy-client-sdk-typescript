# InsertVersionMetadataRequest

## Example Usage

```typescript
import { InsertVersionMetadataRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: InsertVersionMetadataRequest = {
  apiID: "<id>",
  versionID: "<id>",
  versionMetadata: {
    metaKey: "<value>",
    metaValue: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `apiID`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | The ID of the Api to insert metadata for.                                         |
| `versionID`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | The version ID of the Api to insert metadata for.                                 |
| `versionMetadata`                                                                 | [shared.VersionMetadataInput](../../../sdk/models/shared/versionmetadatainput.md) | :heavy_check_mark:                                                                | A JSON representation of the metadata to insert.                                  |