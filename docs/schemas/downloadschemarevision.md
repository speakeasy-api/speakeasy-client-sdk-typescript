# downloadSchemaRevision
Available in: `schemas`

Download a particular schema revision for an Api.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DownloadSchemaRevisionRequest, DownloadSchemaRevisionResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadSchemaRevisionRequest = {
  apiID: "doloremque",
  revisionID: "reprehenderit",
  versionID: "ut",
};

sdk.schemas.downloadSchemaRevision(req).then((res: DownloadSchemaRevisionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```