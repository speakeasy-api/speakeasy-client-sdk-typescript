# Api

An Api is representation of a API (a collection of API Endpoints) within the Speakeasy Platform.

## Example Usage

```typescript
import { Api } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Api = {
  apiId: "<id>",
  createdAt: new Date("2023-10-23T15:05:16.239Z"),
  description: "sweetly triumphantly close phew typewriter gadzooks yet",
  updatedAt: new Date("2022-04-22T20:11:12.127Z"),
  versionId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `apiId`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | The ID of this Api. This is a human-readable name (subject to change).                                |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | Creation timestamp.                                                                                   |
| `description`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | A detailed description of the Api.                                                                    |
| `matched`                                                                                             | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Determines if all the endpoints within the Api are found in the OpenAPI spec associated with the Api. |
| `metaData`                                                                                            | Record<string, *string*[]>                                                                            | :heavy_minus_sign:                                                                                    | A set of values associated with a meta_data key. This field is only set on get requests.              |
| `updatedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | Last update timestamp.                                                                                |
| `versionId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | The version ID of this Api. This is semantic version identifier.                                      |
| `workspaceId`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | The workspace ID this Api belongs to.                                                                 |