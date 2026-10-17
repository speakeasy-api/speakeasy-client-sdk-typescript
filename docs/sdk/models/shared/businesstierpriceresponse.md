# BusinessTierPriceResponse

## Example Usage

```typescript
import { BusinessTierPriceResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: BusinessTierPriceResponse = {
  currency: "Aruban Guilder",
  interval: "<value>",
  priceId: "<id>",
  productName: "<value>",
  unitAmount: 360145,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `currency`                         | *string*                           | :heavy_check_mark:                 | The currency code (e.g., usd)      |
| `interval`                         | *string*                           | :heavy_check_mark:                 | The billing interval (e.g., month) |
| `priceId`                          | *string*                           | :heavy_check_mark:                 | The Stripe price ID                |
| `productName`                      | *string*                           | :heavy_check_mark:                 | The product name from Stripe       |
| `unitAmount`                       | *number*                           | :heavy_check_mark:                 | The price amount in cents          |