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
      createdAt: new Date("2022-08-05T11:32:33.311Z"),
      displayName: "Julius24",
      email: "Kelsi.Mertz@hotmail.com",
      emailVerified: false,
      id: "<id>",
      updatedAt: new Date("2023-03-15T21:57:18.934Z"),
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