# UpsertApiRequest

## Example Usage

```typescript
import { UpsertApiRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpsertApiRequest = {
  apiID: "<id>",
  api: {
    apiId: "<id>",
    description: "ultimately boo ham gift harmful",
    versionId: "<id>",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `apiID`                                                   | *string*                                                  | :heavy_check_mark:                                        | The ID of the Api to upsert.                              |
| `api`                                                     | [shared.ApiInput](../../../sdk/models/shared/apiinput.md) | :heavy_check_mark:                                        | A JSON representation of the Api to upsert                |