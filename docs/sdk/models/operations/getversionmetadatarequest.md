# GetVersionMetadataRequest

## Example Usage

```typescript
import { GetVersionMetadataRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetVersionMetadataRequest = {
  apiID: "<id>",
  versionID: "<id>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `apiID`                                             | *string*                                            | :heavy_check_mark:                                  | The ID of the Api to retrieve metadata for.         |
| `versionID`                                         | *string*                                            | :heavy_check_mark:                                  | The version ID of the Api to retrieve metadata for. |