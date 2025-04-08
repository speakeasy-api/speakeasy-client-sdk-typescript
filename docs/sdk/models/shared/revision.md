# Revision

## Example Usage

```typescript
import { Revision } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Revision = {
  createdAt: new Date("2025-01-14T03:58:52.058Z"),
  digest:
    "sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f",
  id: "<id>",
  namespaceName: "<value>",
  tags: [
    "<value>",
  ],
  updatedAt: new Date("2024-12-29T21:20:56.889Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentsMetadata`                                                                            | [shared.RevisionContentsMetadata](../../../sdk/models/shared/revisioncontentsmetadata.md)     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `digest`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f                       |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Format {namespace_id}/{revision_digest}                                                       |                                                                                               |
| `namespaceName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |