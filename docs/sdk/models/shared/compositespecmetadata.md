# CompositeSpecMetadata

## Example Usage

```typescript
import { CompositeSpecMetadata } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: CompositeSpecMetadata = {
  subscriptionId: "<id>",
  subscriptionSettings: {
    baseSpecNamespaces: [
      "<value>",
    ],
    outputNamespace: "<value>",
    overlayNamespaces: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `subscriptionId`                                                                                                                                              | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The subscription ID for the remote source subscription, if applicable. This indicates that the namespace is created by a remote source and thus is composite. |
| `subscriptionSettings`                                                                                                                                        | [shared.RemoteSourceSubscriptionSettings](../../../sdk/models/shared/remotesourcesubscriptionsettings.md)                                                     | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |