# DeleteApiRequest

## Example Usage

```typescript
import { DeleteApiRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: DeleteApiRequest = {
  apiID: "<id>",
  versionID: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `apiID`                              | *string*                             | :heavy_check_mark:                   | The ID of the Api to delete.         |
| `versionID`                          | *string*                             | :heavy_check_mark:                   | The version ID of the Api to delete. |