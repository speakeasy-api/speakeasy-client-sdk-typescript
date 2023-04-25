# getAllApiVersions
Available in: `apis`

Get all Api versions for a particular ApiEndpoint.
Supports filtering the versions based on metadata attributes.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetAllApiVersionsRequest, GetAllApiVersionsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetAllApiVersionsRequest = {
  apiID: "nam",
  metadata: {
    "occaecati": [
      "deleniti",
    ],
    "hic": [
      "totam",
      "beatae",
      "commodi",
      "molestiae",
    ],
    "modi": [
      "impedit",
    ],
  },
  op: {
    and: false,
  },
};

sdk.apis.getAllApiVersions(req).then((res: GetAllApiVersionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```