# generatePostmanCollection
Available in: `apis`

Generates a postman collection containing all endpoints for a particular API. Includes variables produced for any path/query/header parameters included in the OpenAPI document.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GeneratePostmanCollectionRequest, GeneratePostmanCollectionResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GeneratePostmanCollectionRequest = {
  apiID: "dolorum",
  versionID: "dicta",
};

sdk.apis.generatePostmanCollection(req).then((res: GeneratePostmanCollectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```