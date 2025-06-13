# UpdateWorkspaceSettingsRequest

## Example Usage

```typescript
import { UpdateWorkspaceSettingsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpdateWorkspaceSettingsRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `workspaceId`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Unique identifier of the workspace.                                         |
| `workspaceSettings`                                                         | [shared.WorkspaceSettings](../../../sdk/models/shared/workspacesettings.md) | :heavy_check_mark:                                                          | The workspace settings to update.                                           |