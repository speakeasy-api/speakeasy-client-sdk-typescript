# UpdateWorkspaceDetailsRequest

## Example Usage

```typescript
import { UpdateWorkspaceDetailsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpdateWorkspaceDetailsRequest = {
  workspaceId: "<id>",
  workspace: {
    createdAt: new Date("2022-02-16T20:50:29.690Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2022-01-01T09:39:45.396Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `workspaceId`                                               | *string*                                                    | :heavy_check_mark:                                          | Unique identifier of the workspace.                         |
| `workspace`                                                 | [shared.Workspace](../../../sdk/models/shared/workspace.md) | :heavy_check_mark:                                          | The workspace details to update.                            |