# OrganizationBillingAddOnRequest

A request to add billing add ons

## Example Usage

```typescript
import { OrganizationBillingAddOnRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: OrganizationBillingAddOnRequest = {
  addOns: [
    "custom_code_regions",
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `addOns`                                                            | [shared.BillingAddOn](../../../sdk/models/shared/billingaddon.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |