# ApiInput

An Api is representation of a API (a collection of API Endpoints) within the Speakeasy Platform.

## Example Usage

```typescript
import { ApiInput } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: ApiInput = {
  apiId: "<id>",
  description: "amid gosh arraign barracks",
  versionId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `apiId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of this Api. This is a human-readable name (subject to change).                   |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | A detailed description of the Api.                                                       |
| `metaData`                                                                               | Record<string, *string*[]>                                                               | :heavy_minus_sign:                                                                       | A set of values associated with a meta_data key. This field is only set on get requests. |
| `versionId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | The version ID of this Api. This is semantic version identifier.                         |