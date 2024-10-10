# VersionMetadataInput

A set of keys and associated values, attached to a particular version of an Api.

## Example Usage

```typescript
import { VersionMetadataInput } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: VersionMetadataInput = {
  metaKey: "<value>",
  metaValue: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `metaKey`                            | *string*                             | :heavy_check_mark:                   | The key for this metadata.           |
| `metaValue`                          | *string*                             | :heavy_check_mark:                   | One of the values for this metadata. |