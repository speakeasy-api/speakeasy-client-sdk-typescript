# RevokeUserAccessToWorkspaceRequest

## Example Usage

```typescript
import { RevokeUserAccessToWorkspaceRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: RevokeUserAccessToWorkspaceRequest = {
  userId: "<id>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `workspaceId`                       | *string*                            | :heavy_minus_sign:                  | Unique identifier of the workspace. |
| `userId`                            | *string*                            | :heavy_check_mark:                  | Unique identifier of the user.      |