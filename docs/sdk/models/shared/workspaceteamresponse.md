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
      createdAt: new Date("2024-11-24T21:10:46.683Z"),
      displayName: "Elvera.Mohr",
      email: "Maud59@gmail.com",
      emailVerified: false,
      id: "<id>",
      updatedAt: new Date("2024-01-02T05:13:39.423Z"),
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