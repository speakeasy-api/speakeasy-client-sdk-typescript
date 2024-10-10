# Tag

## Example Usage

```typescript
import { Tag } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Tag = {
  id: "<id>",
  name: "<value>",
  namespaceName: "<value>",
  revisionDigest: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `id`                        | *string*                    | :heavy_check_mark:          | Format {namespace_id}/{tag} |
| `name`                      | *string*                    | :heavy_check_mark:          | Human readable tag name     |
| `namespaceName`             | *string*                    | :heavy_check_mark:          | N/A                         |
| `revisionDigest`            | *string*                    | :heavy_check_mark:          | N/A                         |