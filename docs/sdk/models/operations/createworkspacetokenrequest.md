# CreateWorkspaceTokenRequest

## Example Usage

```typescript
import { CreateWorkspaceTokenRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: CreateWorkspaceTokenRequest = {
  workspaceToken: {
    alg: "<value>",
    createdAt: new Date("2024-09-09T18:02:30.092Z"),
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
| `workspaceId`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Unique identifier of the workspace.                                   |
| `workspaceToken`                                                      | [shared.WorkspaceToken](../../../sdk/models/shared/workspacetoken.md) | :heavy_check_mark:                                                    | N/A                                                                   |