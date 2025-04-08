# GetNamespacesResponse

## Example Usage

```typescript
import { GetNamespacesResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GetNamespacesResponse = {
  items: [
    {
      createdAt: new Date("2025-11-06T02:22:29.445Z"),
      id: "<id>",
      name: "<value>",
      updatedAt: new Date("2023-10-19T10:46:32.430Z"),
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `items`                                                       | [shared.Namespace](../../../sdk/models/shared/namespace.md)[] | :heavy_check_mark:                                            | N/A                                                           |