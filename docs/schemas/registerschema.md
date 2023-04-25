# registerSchema
Available in: `schemas`

Allows uploading a schema for a particular API version.
This will be used to populate ApiEndpoints and used as a base for any schema generation if present.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { RegisterSchemaRequest, RegisterSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: RegisterSchemaRequest = {
  requestBody: {
    file: {
      content: "quae".encode(),
      file: "ipsum",
    },
  },
  apiID: "quidem",
  versionID: "molestias",
};

sdk.schemas.registerSchema(req).then((res: RegisterSchemaResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```