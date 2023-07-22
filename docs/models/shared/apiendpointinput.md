# ApiEndpointInput

An ApiEndpoint is a description of an Endpoint for an API.


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `apiEndpointId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | The ID of this ApiEndpoint. This is a hash of the method and path. |
| `description`                                                      | *string*                                                           | :heavy_check_mark:                                                 | A detailed description of the ApiEndpoint.                         |
| `displayName`                                                      | *string*                                                           | :heavy_check_mark:                                                 | A human-readable name for the ApiEndpoint.                         |
| `method`                                                           | *string*                                                           | :heavy_check_mark:                                                 | HTTP verb.                                                         |
| `path`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Path that handles this Api.                                        |
| `versionId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | The version ID of the Api this ApiEndpoint belongs to.             |