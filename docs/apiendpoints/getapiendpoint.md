# getApiEndpoint
Available in: `apiEndpoints`

Get an ApiEndpoint.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetApiEndpointRequest, GetApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetApiEndpointRequest = {
  apiEndpointID: "deserunt",
  apiID: "perferendis",
  versionID: "ipsam",
};

sdk.apiEndpoints.getApiEndpoint(req).then((res: GetApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```