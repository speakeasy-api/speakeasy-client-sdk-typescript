# UpdateWorkspaceDetailsRequest

## Example Usage

```typescript
import { UpdateWorkspaceDetailsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpdateWorkspaceDetailsRequest = {
  workspace: {
    createdAt: new Date("2023-12-22T10:07:00.418Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2023-07-21T23:44:43.083Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `workspaceId`                                               | *string*                                                    | :heavy_minus_sign:                                          | Unique identifier of the workspace.                         |
| `workspace`                                                 | [shared.Workspace](../../../sdk/models/shared/workspace.md) | :heavy_check_mark:                                          | The workspace details to update.                            |