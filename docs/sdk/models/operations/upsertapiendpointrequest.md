# UpsertApiEndpointRequest

## Example Usage

```typescript
import { UpsertApiEndpointRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpsertApiEndpointRequest = {
  apiID: "<id>",
  versionID: "<id>",
  apiEndpointID: "<id>",
  apiEndpoint: {
    apiEndpointId: "<id>",
    description: "willfully sadly phew er solidly doing lightly inside",
    displayName: "Alfonso85",
    method: "<value>",
    path: "/etc/defaults",
    versionId: "<id>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `apiID`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the Api the ApiEndpoint belongs to.                             |
| `versionID`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | The version ID of the Api the ApiEndpoint belongs to.                     |
| `apiEndpointID`                                                           | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the ApiEndpoint to upsert.                                      |
| `apiEndpoint`                                                             | [shared.ApiEndpointInput](../../../sdk/models/shared/apiendpointinput.md) | :heavy_check_mark:                                                        | A JSON representation of the ApiEndpoint to upsert.                       |