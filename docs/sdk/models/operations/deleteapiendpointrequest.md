# DeleteApiEndpointRequest

## Example Usage

```typescript
import { DeleteApiEndpointRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: DeleteApiEndpointRequest = {
  apiID: "<id>",
  versionID: "<id>",
  apiEndpointID: "<id>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `apiID`                                               | *string*                                              | :heavy_check_mark:                                    | The ID of the Api the ApiEndpoint belongs to.         |
| `versionID`                                           | *string*                                              | :heavy_check_mark:                                    | The version ID of the Api the ApiEndpoint belongs to. |
| `apiEndpointID`                                       | *string*                                              | :heavy_check_mark:                                    | The ID of the ApiEndpoint to delete.                  |