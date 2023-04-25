# deleteSchema
Available in: `schemas`

Delete a particular schema revision for an Api.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DeleteSchemaRequest, DeleteSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteSchemaRequest = {
  apiID: "ipsa",
  revisionID: "omnis",
  versionID: "voluptate",
};

sdk.schemas.deleteSchema(req).then((res: DeleteSchemaResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```