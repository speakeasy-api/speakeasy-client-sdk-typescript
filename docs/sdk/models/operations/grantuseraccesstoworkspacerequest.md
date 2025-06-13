# GrantUserAccessToWorkspaceRequest

## Example Usage

```typescript
import { GrantUserAccessToWorkspaceRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GrantUserAccessToWorkspaceRequest = {
  email: "Sebastian.Paucek6@yahoo.com",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `workspaceId`                         | *string*                              | :heavy_minus_sign:                    | Unique identifier of the workspace.   |
| `email`                               | *string*                              | :heavy_check_mark:                    | Email of the user to grant access to. |