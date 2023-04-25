# upsertApiEndpoint
Available in: `apiEndpoints`

Upsert an ApiEndpoint. If the ApiEndpoint does not exist it will be created, otherwise it will be updated.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { UpsertApiEndpointRequest, UpsertApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: UpsertApiEndpointRequest = {
  apiEndpointInput: {
    apiEndpointId: "repellendus",
    description: "sapiente",
    displayName: "quo",
    method: "odit",
    path: "at",
    versionId: "at",
  },
  apiEndpointID: "maiores",
  apiID: "molestiae",
  versionID: "quod",
};

sdk.apiEndpoints.upsertApiEndpoint(req).then((res: UpsertApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```