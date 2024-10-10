# GenerateOpenApiSpecForApiEndpointRequest

## Example Usage

```typescript
import { GenerateOpenApiSpecForApiEndpointRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GenerateOpenApiSpecForApiEndpointRequest = {
  apiID: "<id>",
  versionID: "<id>",
  apiEndpointID: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `apiID`                                                             | *string*                                                            | :heavy_check_mark:                                                  | The ID of the Api to generate an OpenAPI specification for.         |
| `versionID`                                                         | *string*                                                            | :heavy_check_mark:                                                  | The version ID of the Api to generate an OpenAPI specification for. |
| `apiEndpointID`                                                     | *string*                                                            | :heavy_check_mark:                                                  | The ID of the ApiEndpoint to generate an OpenAPI specification for. |