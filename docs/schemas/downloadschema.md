# downloadSchema
Available in: `schemas`

Download the latest schema for a particular apiID.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DownloadSchemaRequest, DownloadSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadSchemaRequest = {
  apiID: "cum",
  versionID: "perferendis",
};

sdk.schemas.downloadSchema(req).then((res: DownloadSchemaResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```