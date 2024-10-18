# Subscription

A subscription

## Example Usage

```typescript
import { Subscription } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Subscription = {
  createdAt: new Date("2023-03-20T01:13:26.854Z"),
  eventType: "update",
  id: "<id>",
  namespaceName: "<value>",
  subscriptionSettings: "<value>",
  subscriptionType: "cli",
  updatedAt: new Date("2023-07-29T12:07:56.150Z"),
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