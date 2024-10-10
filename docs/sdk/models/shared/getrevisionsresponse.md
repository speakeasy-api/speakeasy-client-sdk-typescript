# GetRevisionsResponse

## Example Usage

```typescript
import { GetRevisionsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GetRevisionsResponse = {
  items: [
    {
      createdAt: new Date("2022-04-02T10:20:37.470Z"),
      digest:
        "sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f",
      id: "<id>",
      namespaceName: "<value>",
      tags: [
        "<value>",
      ],
      updatedAt: new Date("2023-08-29T04:52:14.624Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | [shared.Revision](../../../sdk/models/shared/revision.md)[] | :heavy_check_mark:                                          | N/A                                                         |
| `nextPageToken`                                             | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |