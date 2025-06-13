# AddTags

Request body of tags to add to a revision

## Example Usage

```typescript
import { AddTags } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: AddTags = {
  revisionDigest: "<value>",
  tags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `revisionDigest`                           | *string*                                   | :heavy_check_mark:                         | revision digest to add tags too sha256:... |
| `tags`                                     | *string*[]                                 | :heavy_check_mark:                         | string tags to add to the revision         |