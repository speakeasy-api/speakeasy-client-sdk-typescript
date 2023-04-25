# upsertApi
Available in: `apis`

Upsert an Api. If the Api does not exist, it will be created.
If the Api exists, it will be updated.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { UpsertApiRequest, UpsertApiResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: UpsertApiRequest = {
  apiInput: {
    apiId: "dolor",
    description: "natus",
    metaData: {
      "hic": [
        "fuga",
        "in",
        "corporis",
        "iste",
      ],
      "iure": [
        "quidem",
        "architecto",
        "ipsa",
        "reiciendis",
      ],
    },
    versionId: "est",
  },
  apiID: "mollitia",
};

sdk.apis.upsertApi(req).then((res: UpsertApiResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```