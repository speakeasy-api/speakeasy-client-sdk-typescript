# CreateSubscriptionRequest

## Example Usage

```typescript
import { CreateSubscriptionRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: CreateSubscriptionRequest = {
  registrySubscription: {
    createdAt: new Date("2022-11-15T02:41:04.241Z"),
    eventType: "update",
    id: "<id>",
    namespaceName: "<value>",
    subscriptionSettings: "<value>",
    subscriptionType: "cli",
    updatedAt: new Date("2022-11-30T08:58:52.513Z"),
    workspaceId: "<id>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `workspaceId`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | The workspace ID                                                                  |
| `registrySubscription`                                                            | [shared.RegistrySubscription](../../../sdk/models/shared/registrysubscription.md) | :heavy_check_mark:                                                                | The subscription to create                                                        |