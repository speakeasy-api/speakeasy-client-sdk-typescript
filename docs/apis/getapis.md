# getApis
Available in: `apis`

Get a list of all Apis and their versions for a given workspace.
Supports filtering the APIs based on metadata attributes.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetApisRequest, GetApisResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetApisRequest = {
  metadata: {
    "esse": [
      "excepturi",
    ],
    "aspernatur": [
      "ad",
    ],
    "natus": [
      "iste",
    ],
  },
  op: {
    and: false,
  },
};

sdk.apis.getApis(req).then((res: GetApisResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```