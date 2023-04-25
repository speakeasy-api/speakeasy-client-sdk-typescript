# generatePostmanCollectionForApiEndpoint
Available in: `apiEndpoints`

Generates a postman collection that allows the endpoint to be called from postman variables produced for any path/query/header parameters included in the OpenAPI document.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import {
  GeneratePostmanCollectionForApiEndpointRequest,
  GeneratePostmanCollectionForApiEndpointResponse,
} from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GeneratePostmanCollectionForApiEndpointRequest = {
  apiEndpointID: "nisi",
  apiID: "recusandae",
  versionID: "temporibus",
};

sdk.apiEndpoints.generatePostmanCollectionForApiEndpoint(req).then((res: GeneratePostmanCollectionForApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```