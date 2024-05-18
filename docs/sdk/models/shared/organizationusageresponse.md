# OrganizationUsageResponse

A billing summary of organization usage


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `allowedLanguages`                                                                            | *string*[]                                                                                    | :heavy_check_mark:                                                                            | List of allowed languages                                                                     |
| `freeTrialExpiry`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Expiry date of the free trial, will be null if no trial                                       |
| `totalAllowedLanguages`                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Total number of allowed languages, -1 if unlimited                                            |
| `usage`                                                                                       | [shared.OrganizationUsage](../../../sdk/models/shared/organizationusage.md)[]                 | :heavy_check_mark:                                                                            | N/A                                                                                           |