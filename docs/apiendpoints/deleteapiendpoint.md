# deleteApiEndpoint
Available in: `apiEndpoints`

Delete an ApiEndpoint. This will also delete all associated Request Logs (if using a Postgres datastore).

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DeleteApiEndpointRequest, DeleteApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteApiEndpointRequest = {
  apiEndpointID: "delectus",
  apiID: "tempora",
  versionID: "suscipit",
};

sdk.apiEndpoints.deleteApiEndpoint(req).then((res: DeleteApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```