<!-- Start SDK Example Usage -->
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetApisResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.apis.getApis({
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
}).then((res: GetApisResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->