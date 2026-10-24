# BusinessTierPricesResponse

## Example Usage

```typescript
import { BusinessTierPricesResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: BusinessTierPricesResponse = {
  annual: {
    currency: "Saint Helena Pound",
    interval: "<value>",
    priceId: "<id>",
    productName: "<value>",
    unitAmount: 189152,
  },
  monthly: {
    currency: "Australian Dollar",
    interval: "<value>",
    priceId: "<id>",
    productName: "<value>",
    unitAmount: 596122,
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `annual`                                                                                    | [shared.BusinessTierPriceResponse](../../../sdk/models/shared/businesstierpriceresponse.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `monthly`                                                                                   | [shared.BusinessTierPriceResponse](../../../sdk/models/shared/businesstierpriceresponse.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |