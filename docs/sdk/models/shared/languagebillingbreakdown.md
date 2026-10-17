# LanguageBillingBreakdown

Contains the billing breakdown for a single language

## Example Usage

```typescript
import { LanguageBillingBreakdown } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: LanguageBillingBreakdown = {
  billableUnits: 653851,
  language: "<value>",
  operationCount: 213935,
  targetCount: 10865,
  targets: [
    {
      genLockId: "<id>",
      isActive: true,
      operationCount: 84348,
      target: "<value>",
      targetName: "<value>",
      workspaceSlug: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `billableUnits`                                                                         | *number*                                                                                | :heavy_check_mark:                                                                      | Total billable units contributed by targets in this language                            |
| `language`                                                                              | *string*                                                                                | :heavy_check_mark:                                                                      | The generated SDK language                                                              |
| `operationCount`                                                                        | *number*                                                                                | :heavy_check_mark:                                                                      | Number of operations from the latest generation event for this language                 |
| `targetCount`                                                                           | *number*                                                                                | :heavy_check_mark:                                                                      | Number of generated SDK targets for this language                                       |
| `targets`                                                                               | [shared.TargetBillingBreakdown](../../../sdk/models/shared/targetbillingbreakdown.md)[] | :heavy_check_mark:                                                                      | List of generated targets for this language                                             |