# getSchemaDiff
Available in: `schemas`

Get a diff of two schema revisions for an Api.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetSchemaDiffRequest, GetSchemaDiffResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetSchemaDiffRequest = {
  apiID: "corporis",
  baseRevisionID: "dolore",
  targetRevisionID: "iusto",
  versionID: "dicta",
};

sdk.schemas.getSchemaDiff(req).then((res: GetSchemaDiffResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```