# getVersionMetadata
Available in: `metadata`

Get all metadata for a particular apiID and versionID.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetVersionMetadataRequest, GetVersionMetadataResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetVersionMetadataRequest = {
  apiID: "doloribus",
  versionID: "sapiente",
};

sdk.metadata.getVersionMetadata(req).then((res: GetVersionMetadataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```