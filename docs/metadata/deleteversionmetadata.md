# deleteVersionMetadata
Available in: `metadata`

Delete metadata for a particular apiID and versionID.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DeleteVersionMetadataRequest, DeleteVersionMetadataResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteVersionMetadataRequest = {
  apiID: "excepturi",
  metaKey: "accusantium",
  metaValue: "iure",
  versionID: "culpa",
};

sdk.metadata.deleteVersionMetadata(req).then((res: DeleteVersionMetadataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```