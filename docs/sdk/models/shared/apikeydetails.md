# ApiKeyDetails

## Example Usage

```typescript
import { ApiKeyDetails } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: ApiKeyDetails = {
  accountTypeV2: "business",
  enabledFeatures: [
    "<value>",
  ],
  orgSlug: "<value>",
  telemetryDisabled: false,
  workspaceCreatedAt: new Date("2024-01-30T00:29:44.940Z"),
  workspaceId: "<id>",
  workspaceSlug: "<value>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `accountTypeV2`                                                                                                         | [shared.AccountType](../../../sdk/models/shared/accounttype.md)                                                         | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `enabledFeatures`                                                                                                       | *string*[]                                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`featureFlags`~~                                                                                                      | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `generationAccessUnlimited`                                                                                             | *boolean*                                                                                                               | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `orgSlug`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `telemetryDisabled`                                                                                                     | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `workspaceCreatedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Workspace creation timestamp.                                                                                           |
| `workspaceId`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `workspaceSlug`                                                                                                         | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |