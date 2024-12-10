# CreateSubscriptionRequest

## Example Usage

```typescript
import { CreateSubscriptionRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: CreateSubscriptionRequest = {
  registrySubscription: {
    createdAt: new Date("2022-07-28T01:45:34.109Z"),
    eventType: "update",
    id: "<id>",
    namespaceName: "<value>",
    subscriptionSettings: "<value>",
    subscriptionType: "cli",
    updatedAt: new Date("2023-07-15T09:44:04.261Z"),
    workspaceId: "<id>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `workspaceId`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | The workspace ID                                                                  |
| `registrySubscription`                                                            | [shared.RegistrySubscription](../../../sdk/models/shared/registrysubscription.md) | :heavy_check_mark:                                                                | The subscription to create                                                        |