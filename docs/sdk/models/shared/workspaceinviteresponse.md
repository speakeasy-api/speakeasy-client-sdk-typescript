# WorkspaceInviteResponse

A response for workspace user invite

## Example Usage

```typescript
import { WorkspaceInviteResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: WorkspaceInviteResponse = {
  relationship: {
    userId: "<id>",
    workspaceId: "<id>",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `inviteLink`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `relationship`                                                    | [shared.Relationship](../../../sdk/models/shared/relationship.md) | :heavy_check_mark:                                                | N/A                                                               |