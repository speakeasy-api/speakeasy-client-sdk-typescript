# RegistrySubscription

A subscription to a registry event

## Example Usage

```typescript
import { RegistrySubscription } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: RegistrySubscription = {
  createdAt: new Date("2024-03-09T09:46:45.083Z"),
  eventType: "update",
  id: "<id>",
  namespaceName: "<value>",
  subscriptionSettings: "<value>",
  subscriptionType: "cli",
  updatedAt: new Date("2024-09-14T03:21:41.334Z"),
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `eventType`                                                                                   | [shared.EventType](../../../sdk/models/shared/eventtype.md)                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `namespaceName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionSettings`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionType`                                                                            | [shared.SubscriptionType](../../../sdk/models/shared/subscriptiontype.md)                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |