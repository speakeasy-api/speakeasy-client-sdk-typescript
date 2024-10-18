# CreateWorkspaceTokenRequest

## Example Usage

```typescript
import { CreateWorkspaceTokenRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: CreateWorkspaceTokenRequest = {
  workspaceId: "<id>",
  workspaceToken: {
    alg: "<value>",
    createdAt: new Date("2024-03-22T07:24:15.908Z"),
    id: "<id>",
    key: "<key>",
    name: "<value>",
    workspaceId: "<id>",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `workspaceId`                                                         | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier of the workspace.                                   |
| `workspaceToken`                                                      | [shared.WorkspaceToken](../../../sdk/models/shared/workspacetoken.md) | :heavy_check_mark:                                                    | N/A                                                                   |