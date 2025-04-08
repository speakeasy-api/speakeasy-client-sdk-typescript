# Namespace

A namespace contains many revisions.

## Example Usage

```typescript
import { Namespace } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Namespace = {
  createdAt: new Date("2025-01-28T08:46:24.999Z"),
  id: "<id>",
  name: "<value>",
  updatedAt: new Date("2023-12-30T01:59:14.256Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `archivedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `compositeSpecMetadata`                                                                       | [shared.CompositeSpecMetadata](../../../sdk/models/shared/compositespecmetadata.md)           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | {organization_slug}/{workspace_slug}/{namespace_name}                                         |
| `latestRevisionMetadata`                                                                      | [shared.RevisionContentsMetadata](../../../sdk/models/shared/revisioncontentsmetadata.md)     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | A human-readable name for the namespace.                                                      |
| `public`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether the namespace is publicly accessible                                        |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |