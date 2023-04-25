# generateRequestPostmanCollection
Available in: `requests`

Generates a Postman collection for a particular request. 
Allowing it to be replayed with the same inputs that were captured by the SDK.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import {
  GenerateRequestPostmanCollectionRequest,
  GenerateRequestPostmanCollectionResponse,
} from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GenerateRequestPostmanCollectionRequest = {
  requestID: "quo",
};

sdk.requests.generateRequestPostmanCollection(req).then((res: GenerateRequestPostmanCollectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```