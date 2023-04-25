# getAllApiEndpoints
Available in: `apiEndpoints`

Get all Api endpoints for a particular apiID.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetAllApiEndpointsRequest, GetAllApiEndpointsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetAllApiEndpointsRequest = {
  apiID: "ab",
};

sdk.apiEndpoints.getAllApiEndpoints(req).then((res: GetAllApiEndpointsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```