# DeleteBillingAddOnRequest

## Example Usage

```typescript
import { DeleteBillingAddOnRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: DeleteBillingAddOnRequest = {
  addOn: "custom_code_regions",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `addOn`                                                           | [shared.BillingAddOn](../../../sdk/models/shared/billingaddon.md) | :heavy_check_mark:                                                | The specific add-on to delete.                                    |