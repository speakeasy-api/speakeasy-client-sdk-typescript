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
      createdAt: new Date("2022-07-05T06:02:39.418Z"),
      displayName: "Ryleigh45",
      email: "Ruth39@yahoo.com",
      emailVerified: false,
      id: "<id>",
      updatedAt: new Date("2023-01-13T19:27:56.241Z"),
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