# BillingOperationsResponse

Contains the billing operations breakdown for an organization

## Example Usage

```typescript
import { BillingOperationsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: BillingOperationsResponse = {
  specs: [],
  totalBillableUnits: 293396,
  totalUniqueOperations: 679464,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `specs`                                                                             | [shared.SpecBillingBreakdown](../../../sdk/models/shared/specbillingbreakdown.md)[] | :heavy_check_mark:                                                                  | Billing breakdown for each spec/namespace                                           |
| `totalBillableUnits`                                                                | *number*                                                                            | :heavy_check_mark:                                                                  | Total billable units (operations x targets per spec)                                |
| `totalUniqueOperations`                                                             | *number*                                                                            | :heavy_check_mark:                                                                  | Total count of unique operations across all specs                                   |