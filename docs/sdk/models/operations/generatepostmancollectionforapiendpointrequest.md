# GeneratePostmanCollectionForApiEndpointRequest

## Example Usage

```typescript
import { GeneratePostmanCollectionForApiEndpointRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GeneratePostmanCollectionForApiEndpointRequest = {
  apiID: "<id>",
  versionID: "<id>",
  apiEndpointID: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `apiID`                                                         | *string*                                                        | :heavy_check_mark:                                              | The ID of the Api to generate a Postman collection for.         |
| `versionID`                                                     | *string*                                                        | :heavy_check_mark:                                              | The version ID of the Api to generate a Postman collection for. |
| `apiEndpointID`                                                 | *string*                                                        | :heavy_check_mark:                                              | The ID of the ApiEndpoint to generate a Postman collection for. |