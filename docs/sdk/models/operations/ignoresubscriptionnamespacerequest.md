# IgnoreSubscriptionNamespaceRequest

## Example Usage

```typescript
import { IgnoreSubscriptionNamespaceRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: IgnoreSubscriptionNamespaceRequest = {
  subscriptionID: "<id>",
  namespaceName: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `subscriptionID`             | *string*                     | :heavy_check_mark:           | The existing subscription ID |
| `namespaceName`              | *string*                     | :heavy_check_mark:           | The namespace name           |