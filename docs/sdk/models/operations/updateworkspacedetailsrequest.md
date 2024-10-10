# UpdateWorkspaceDetailsRequest

## Example Usage

```typescript
import { UpdateWorkspaceDetailsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpdateWorkspaceDetailsRequest = {
  workspaceId: "<id>",
  workspace: {
    createdAt: new Date("2024-12-13T16:03:43.381Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    telemetryDisabled: false,
    updatedAt: new Date("2022-02-03T08:20:20.613Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `workspaceId`                                               | *string*                                                    | :heavy_check_mark:                                          | Unique identifier of the workspace.                         |
| `workspace`                                                 | [shared.Workspace](../../../sdk/models/shared/workspace.md) | :heavy_check_mark:                                          | The workspace details to update.                            |