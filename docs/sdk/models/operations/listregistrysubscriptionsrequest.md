# ListRegistrySubscriptionsRequest

## Example Usage

```typescript
import { ListRegistrySubscriptionsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: ListRegistrySubscriptionsRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `workspaceId`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | The workspace ID                                                          |
| `eventType`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | The event type                                                            |
| `namespaceName`                                                           | *string*                                                                  | :heavy_minus_sign:                                                        | The namespace name                                                        |
| `subscriptionType`                                                        | [shared.SubscriptionType](../../../sdk/models/shared/subscriptiontype.md) | :heavy_minus_sign:                                                        | The subscription type                                                     |
| `tag`                                                                     | *string*                                                                  | :heavy_minus_sign:                                                        | The tag                                                                   |