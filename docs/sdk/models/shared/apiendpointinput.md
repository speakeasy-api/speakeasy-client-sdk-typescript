# ApiEndpointInput

An ApiEndpoint is a description of an Endpoint for an API.

## Example Usage

```typescript
import { ApiEndpointInput } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: ApiEndpointInput = {
  apiEndpointId: "<id>",
  description: "worth uh-huh substitution psst upon er",
  displayName: "Lessie_McLaughlin",
  method: "<value>",
  path: "/home/user",
  versionId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `apiEndpointId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | The ID of this ApiEndpoint. This is a hash of the method and path. |
| `description`                                                      | *string*                                                           | :heavy_check_mark:                                                 | A detailed description of the ApiEndpoint.                         |
| `displayName`                                                      | *string*                                                           | :heavy_check_mark:                                                 | A human-readable name for the ApiEndpoint.                         |
| `method`                                                           | *string*                                                           | :heavy_check_mark:                                                 | HTTP verb.                                                         |
| `path`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Path that handles this Api.                                        |
| `versionId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | The version ID of the Api this ApiEndpoint belongs to.             |