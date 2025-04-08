# UpdateWorkspaceSettingsRequest

## Example Usage

```typescript
import { UpdateWorkspaceSettingsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpdateWorkspaceSettingsRequest = {
  workspaceId: "<id>",
  workspaceSettings: {
    createdAt: new Date("2024-01-11T14:49:22.396Z"),
    updatedAt: new Date("2023-02-11T06:08:15.713Z"),
    webhookUrl: "https://damaged-role.org",
    workspaceId: "<id>",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `workspaceId`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Unique identifier of the workspace.                                         |
| `workspaceSettings`                                                         | [shared.WorkspaceSettings](../../../sdk/models/shared/workspacesettings.md) | :heavy_check_mark:                                                          | The workspace settings to update.                                           |