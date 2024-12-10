# UpdateWorkspaceSettingsRequest

## Example Usage

```typescript
import { UpdateWorkspaceSettingsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpdateWorkspaceSettingsRequest = {
  workspaceSettings: {
    createdAt: new Date("2022-11-05T18:37:43.326Z"),
    updatedAt: new Date("2023-10-05T16:55:58.841Z"),
    webhookUrl: "https://lovely-warming.org/",
    workspaceId: "<id>",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `workspaceId`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Unique identifier of the workspace.                                         |
| `workspaceSettings`                                                         | [shared.WorkspaceSettings](../../../sdk/models/shared/workspacesettings.md) | :heavy_check_mark:                                                          | The workspace settings to update.                                           |