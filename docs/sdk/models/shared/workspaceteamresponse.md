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
      createdAt: new Date("2023-05-16T08:17:57.191Z"),
      displayName: "Eudora.Collier-Boyer",
      email: "Zola81@yahoo.com",
      emailVerified: false,
      id: "<id>",
      updatedAt: new Date("2024-09-02T05:07:56.421Z"),
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