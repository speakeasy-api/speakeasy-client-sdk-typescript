# ListSubscriptionsRequest

## Example Usage

```typescript
import { ListSubscriptionsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: ListSubscriptionsRequest = {
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `workspaceId`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | The workspace ID                                                          |
| `eventType`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | The event type                                                            |
| `namespaceName`                                                           | *string*                                                                  | :heavy_minus_sign:                                                        | The namespace name                                                        |
| `subscriptionType`                                                        | [shared.SubscriptionType](../../../sdk/models/shared/subscriptiontype.md) | :heavy_minus_sign:                                                        | The subscription type                                                     |
| `tag`                                                                     | *string*                                                                  | :heavy_minus_sign:                                                        | The tag                                                                   |