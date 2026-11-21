# CancelSubscriptionResponse

## Example Usage

```typescript
import { CancelSubscriptionResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: CancelSubscriptionResponse = {
  success: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `effectiveAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the cancellation takes effect (from Stripe current_period_end)                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Additional message about the operation                                                        |
| `success`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the operation was successful                                                          |
| `targetToKeep`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The gen_lock_id of the target to keep                                                         |