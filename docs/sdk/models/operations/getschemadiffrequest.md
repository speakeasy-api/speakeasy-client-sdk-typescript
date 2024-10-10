# GetSchemaDiffRequest

## Example Usage

```typescript
import { GetSchemaDiffRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetSchemaDiffRequest = {
  apiID: "<id>",
  versionID: "<id>",
  baseRevisionID: "<id>",
  targetRevisionID: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `apiID`                                           | *string*                                          | :heavy_check_mark:                                | The ID of the Api to retrieve schemas for.        |
| `versionID`                                       | *string*                                          | :heavy_check_mark:                                | The version ID of the Api to delete metadata for. |
| `baseRevisionID`                                  | *string*                                          | :heavy_check_mark:                                | The base revision ID of the schema to retrieve.   |
| `targetRevisionID`                                | *string*                                          | :heavy_check_mark:                                | The target revision ID of the schema to retrieve. |