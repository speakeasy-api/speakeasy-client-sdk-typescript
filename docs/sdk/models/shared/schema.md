# Schema

A Schema represents an API schema for a particular Api and Version.

## Example Usage

```typescript
import { Schema } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Schema = {
  apiId: "<id>",
  createdAt: new Date("2024-11-01T00:46:16.847Z"),
  description: "unless lest reward firsthand mmm concerning ceramics instantly",
  revisionId: "<id>",
  versionId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `apiId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the Api this Schema belongs to.                                                     |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp.                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | A detailed description of the Schema.                                                         |
| `revisionId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | An ID referencing this particular revision of the Schema.                                     |
| `versionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The version ID of the Api this Schema belongs to.                                             |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The workspace ID this Schema belongs to.                                                      |