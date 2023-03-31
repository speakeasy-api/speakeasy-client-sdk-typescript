<!-- Start SDK Example Usage -->
```typescript
import {
  GetApisRequest,
  GetApisResponse
} from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetApisRequest = {
  metadata: {
    "provident": [
      "quibusdam",
      "unde",
      "nulla",
    ],
    "corrupti": [
      "vel",
      "error",
      "deserunt",
      "suscipit",
    ],
    "iure": [
      "debitis",
      "ipsa",
    ],
  },
  op: {
    and: false,
  },
};

sdk.apis.getApis(req).then((res: GetApisResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->