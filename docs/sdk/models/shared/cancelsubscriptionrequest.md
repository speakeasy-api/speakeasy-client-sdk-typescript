# CancelSubscriptionRequest

## Example Usage

```typescript
import { CancelSubscriptionRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: CancelSubscriptionRequest = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `targetToKeep`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The gen_lock_id of the target to keep after downgrade to free tier. Omit when no active targets remain. |