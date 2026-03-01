# SpecBillingBreakdown

Contains the billing breakdown for a single spec/namespace

## Example Usage

```typescript
import { SpecBillingBreakdown } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: SpecBillingBreakdown = {
  billableUnits: 62018,
  isArchived: false,
  namespace: "<value>",
  operationCount: 337458,
  targetCount: 198625,
  targets: [],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `billableUnits`                                                                         | *number*                                                                                | :heavy_check_mark:                                                                      | Billable units for this spec (operation_count x target_count)                           |
| `isArchived`                                                                            | *boolean*                                                                               | :heavy_check_mark:                                                                      | Whether the spec/namespace is archived                                                  |
| `namespace`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | The namespace name for this spec                                                        |
| `operationCount`                                                                        | *number*                                                                                | :heavy_check_mark:                                                                      | Number of operations in this spec                                                       |
| `operationIds`                                                                          | *string*[]                                                                              | :heavy_minus_sign:                                                                      | List of operation IDs (only included when include_operation_ids is true)                |
| `targetCount`                                                                           | *number*                                                                                | :heavy_check_mark:                                                                      | Number of targets using this spec                                                       |
| `targets`                                                                               | [shared.TargetBillingBreakdown](../../../sdk/models/shared/targetbillingbreakdown.md)[] | :heavy_check_mark:                                                                      | List of targets using this spec                                                         |