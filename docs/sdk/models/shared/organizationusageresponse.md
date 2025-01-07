# OrganizationUsageResponse

A billing summary of organization usage

## Example Usage

```typescript
import { OrganizationUsageResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: OrganizationUsageResponse = {
  allowedLanguages: [
    "<value>",
  ],
  totalAllowedLanguages: 363711,
  usage: [
    {
      accessible: false,
      accessibleFeatures: [
        "<value>",
      ],
      genLockIds: [
        "<value>",
      ],
      language: "<value>",
      maxOperations: 570197,
      numberOfOperations: 438601,
      usedFeatures: [
        "<value>",
      ],
      workspaces: [
        "<value>",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `allowedLanguages`                                                                            | *string*[]                                                                                    | :heavy_check_mark:                                                                            | List of allowed languages                                                                     |
| `freeTrialExpiry`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Expiry date of the free trial, will be null if no trial                                       |
| `totalAllowedLanguages`                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Total number of allowed languages, -1 if unlimited                                            |
| `usage`                                                                                       | [shared.OrganizationUsage](../../../sdk/models/shared/organizationusage.md)[]                 | :heavy_check_mark:                                                                            | N/A                                                                                           |