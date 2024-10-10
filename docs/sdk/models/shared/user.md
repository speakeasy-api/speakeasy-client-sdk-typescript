# User

## Example Usage

```typescript
import { User } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: User = {
  admin: false,
  confirmed: false,
  createdAt: new Date("2022-04-20T22:07:54.686Z"),
  displayName: "Agnes_Ortiz",
  email: "Jeanette23@gmail.com",
  emailVerified: false,
  id: "<id>",
  updatedAt: new Date("2024-10-28T17:59:56.921Z"),
  whitelisted: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `admin`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the user is an admin.                                                       |
| `confirmed`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the user has been confirmed.                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the user's creation.                                                             |
| `defaultWorkspaceId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier of the default workspace.                                                          |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Display name of the user.                                                                     |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address of the user.                                                                    |
| `emailVerified`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the email address has been verified.                                        |
| `githubHandle`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | GitHub handle of the user.                                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the user.                                                               |
| `lastLoginAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of the last login.                                                                  |
| `photoUrl`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | URL of the user's photo.                                                                      |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the user's last update.                                                          |
| `whitelisted`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the user has been whitelisted.                                              |