# GetWorkspaceEventsByTargetRequest

## Example Usage

```typescript
import { GetWorkspaceEventsByTargetRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetWorkspaceEventsByTargetRequest = {
  workspaceId: "<id>",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `workspaceId`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Unique identifier of the workspace.                                                                               |
| `targetId`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Filter to only return events corresponding to a particular gen_lock_id (gen_lock_id uniquely identifies a target) |
| `afterCreatedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | Filter to only return events created after this timestamp                                                         |