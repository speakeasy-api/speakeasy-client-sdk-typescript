# getAllForVersionApiEndpoints
Available in: `apiEndpoints`

Get all ApiEndpoints for a particular apiID and versionID.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetAllForVersionApiEndpointsRequest, GetAllForVersionApiEndpointsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetAllForVersionApiEndpointsRequest = {
  apiID: "quis",
  versionID: "veritatis",
};

sdk.apiEndpoints.getAllForVersionApiEndpoints(req).then((res: GetAllForVersionApiEndpointsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```