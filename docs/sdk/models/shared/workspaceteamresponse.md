# WorkspaceTeamResponse

Workspace team response

## Example Usage

```typescript
import { WorkspaceTeamResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: WorkspaceTeamResponse = {
  users: [
    {
      admin: false,
      confirmed: false,
      createdAt: new Date("2023-11-27T13:15:01.733Z"),
      displayName: "Devyn_Paucek",
      email: "Pasquale_Predovic77@gmail.com",
      emailVerified: false,
      id: "<id>",
      updatedAt: new Date("2024-02-14T16:46:50.809Z"),
      whitelisted: false,
    },
  ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `ssoMetadata`                                                   | [shared.SSOMetadata](../../../sdk/models/shared/ssometadata.md) | :heavy_minus_sign:                                              | SSO metadata for a workspace                                    |
| `users`                                                         | [shared.User](../../../sdk/models/shared/user.md)[]             | :heavy_check_mark:                                              | N/A                                                             |