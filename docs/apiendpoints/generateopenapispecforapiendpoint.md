# generateOpenApiSpecForApiEndpoint
Available in: `apiEndpoints`

This endpoint will generate a new operation in any registered OpenAPI document if the operation does not already exist in the document.
Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import {
  GenerateOpenApiSpecForApiEndpointRequest,
  GenerateOpenApiSpecForApiEndpointResponse,
} from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GenerateOpenApiSpecForApiEndpointRequest = {
  apiEndpointID: "voluptatum",
  apiID: "iusto",
  versionID: "excepturi",
};

sdk.apiEndpoints.generateOpenApiSpecForApiEndpoint(req).then((res: GenerateOpenApiSpecForApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```