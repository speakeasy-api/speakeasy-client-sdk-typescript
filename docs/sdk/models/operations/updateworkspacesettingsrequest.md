# UpdateWorkspaceSettingsRequest

## Example Usage

```typescript
import { UpdateWorkspaceSettingsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpdateWorkspaceSettingsRequest = {
  workspaceId: "<id>",
  workspaceSettings: {
    createdAt: new Date("2022-10-28T00:15:47.100Z"),
    updatedAt: new Date("2023-05-22T11:00:48.310Z"),
    webhookUrl: "https://candid-pine.net",
    workspaceId: "<id>",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `workspaceId`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier of the workspace.                                         |
| `workspaceSettings`                                                         | [shared.WorkspaceSettings](../../../sdk/models/shared/workspacesettings.md) | :heavy_check_mark:                                                          | The workspace settings to update.                                           |