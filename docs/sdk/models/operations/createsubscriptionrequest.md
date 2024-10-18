# CreateSubscriptionRequest

## Example Usage

```typescript
import { CreateSubscriptionRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: CreateSubscriptionRequest = {
  workspaceId: "<id>",
  subscription: {
    createdAt: new Date("2022-11-19T10:08:01.911Z"),
    eventType: "update",
    id: "<id>",
    namespaceName: "<value>",
    subscriptionSettings: "<value>",
    subscriptionType: "cli",
    updatedAt: new Date("2023-01-23T21:05:37.371Z"),
    workspaceId: "<id>",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `workspaceId`                                                     | *string*                                                          | :heavy_check_mark:                                                | The workspace ID                                                  |
| `subscription`                                                    | [shared.Subscription](../../../sdk/models/shared/subscription.md) | :heavy_check_mark:                                                | The subscription to create                                        |