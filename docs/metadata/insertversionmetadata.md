# insertVersionMetadata
Available in: `metadata`

Insert metadata for a particular apiID and versionID.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { InsertVersionMetadataRequest, InsertVersionMetadataResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: InsertVersionMetadataRequest = {
  versionMetadataInput: {
    metaKey: "architecto",
    metaValue: "mollitia",
  },
  apiID: "dolorem",
  versionID: "culpa",
};

sdk.metadata.insertVersionMetadata(req).then((res: InsertVersionMetadataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```