# UpsertApiEndpointRequest


## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `apiID`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the Api the ApiEndpoint belongs to.                             |
| `versionID`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | The version ID of the Api the ApiEndpoint belongs to.                     |
| `apiEndpointID`                                                           | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the ApiEndpoint to upsert.                                      |
| `apiEndpoint`                                                             | [shared.ApiEndpointInput](../../../sdk/models/shared/apiendpointinput.md) | :heavy_check_mark:                                                        | A JSON representation of the ApiEndpoint to upsert.                       |