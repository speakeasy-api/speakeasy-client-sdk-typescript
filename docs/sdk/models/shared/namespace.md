# Namespace

A namespace contains many revisions.

## Example Usage

```typescript
import { Namespace } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Namespace = {
  createdAt: new Date("2023-01-23T03:49:29.014Z"),
  id: "<id>",
  name: "<value>",
  updatedAt: new Date("2025-07-01T13:13:56.703Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `compositeSpecMetadata`                                                                       | [shared.CompositeSpecMetadata](../../../sdk/models/shared/compositespecmetadata.md)           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | {organization_slug}/{workspace_slug}/{namespace_name}                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | A human-readable name for the namespace.                                                      |
| `public`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether the namespace is publicly accessible                                        |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |