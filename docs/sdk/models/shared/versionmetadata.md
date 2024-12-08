# VersionMetadata

A set of keys and associated values, attached to a particular version of an Api.

## Example Usage

```typescript
import { VersionMetadata } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: VersionMetadata = {
  apiId: "<id>",
  createdAt: new Date("2023-02-09T23:56:49.919Z"),
  metaKey: "<value>",
  metaValue: "<value>",
  versionId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `apiId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the Api this Metadata belongs to.                                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp.                                                                           |
| `metaKey`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The key for this metadata.                                                                    |
| `metaValue`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | One of the values for this metadata.                                                          |
| `versionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The version ID of the Api this Metadata belongs to.                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The workspace ID this Metadata belongs to.                                                    |