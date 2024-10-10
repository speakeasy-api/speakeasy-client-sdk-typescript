# GetNamespacesResponse

## Example Usage

```typescript
import { GetNamespacesResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GetNamespacesResponse = {
  items: [
    {
      createdAt: new Date("2024-10-27T17:07:18.797Z"),
      id: "<id>",
      name: "<value>",
      updatedAt: new Date("2024-04-18T19:06:55.714Z"),
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `items`                                                       | [shared.Namespace](../../../sdk/models/shared/namespace.md)[] | :heavy_check_mark:                                            | N/A                                                           |