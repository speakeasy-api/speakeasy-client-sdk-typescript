# GetTagsResponse

## Example Usage

```typescript
import { GetTagsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GetTagsResponse = {
  items: [
    {
      id: "<id>",
      name: "<value>",
      namespaceName: "<value>",
      revisionDigest: "<value>",
    },
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `items`                                           | [shared.Tag](../../../sdk/models/shared/tag.md)[] | :heavy_check_mark:                                | N/A                                               |