# GenerateOpenApiSpecRequest

## Example Usage

```typescript
import { GenerateOpenApiSpecRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GenerateOpenApiSpecRequest = {
  apiID: "<id>",
  versionID: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `apiID`                                                             | *string*                                                            | :heavy_check_mark:                                                  | The ID of the Api to generate an OpenAPI specification for.         |
| `versionID`                                                         | *string*                                                            | :heavy_check_mark:                                                  | The version ID of the Api to generate an OpenAPI specification for. |