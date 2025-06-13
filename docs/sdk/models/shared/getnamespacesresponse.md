# GetNamespacesResponse

## Example Usage

```typescript
import { GetNamespacesResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GetNamespacesResponse = {
  items: [
    {
      createdAt: new Date("2023-10-19T10:46:32.430Z"),
      id: "<id>",
      name: "<value>",
      updatedAt: new Date("2023-01-24T18:39:38.372Z"),
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `items`                                                       | [shared.Namespace](../../../sdk/models/shared/namespace.md)[] | :heavy_check_mark:                                            | N/A                                                           |