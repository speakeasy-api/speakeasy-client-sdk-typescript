# BillingOperationsResponse

Contains the billing operations breakdown for an organization

## Example Usage

```typescript
import { BillingOperationsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: BillingOperationsResponse = {
  languages: [],
  totalBillableUnits: 293396,
  totalUniqueOperations: 679464,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `languages`                                                                                 | [shared.LanguageBillingBreakdown](../../../sdk/models/shared/languagebillingbreakdown.md)[] | :heavy_check_mark:                                                                          | Billing breakdown for each language                                                         |
| `totalBillableUnits`                                                                        | *number*                                                                                    | :heavy_check_mark:                                                                          | Total billable units across all generated targets                                           |
| `totalUniqueOperations`                                                                     | *number*                                                                                    | :heavy_check_mark:                                                                          | Total count of unique operations across all languages                                       |