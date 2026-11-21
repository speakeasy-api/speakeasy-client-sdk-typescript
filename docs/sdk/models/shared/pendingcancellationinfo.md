# PendingCancellationInfo

Information about a pending subscription cancellation

## Example Usage

```typescript
import { PendingCancellationInfo } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: PendingCancellationInfo = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `effectiveAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the cancellation takes effect (from Stripe current_period_end)                           |
| `targetToKeep`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | gen_lock_id of the target that will be kept after downgrade                                   |
| `targetToKeepName`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display name of the target to keep                                                            |