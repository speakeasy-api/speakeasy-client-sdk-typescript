<!-- Start SDK Example Usage -->


```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetApisResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "",
  },
});

sdk.apis.getApis({
  metadata: {
    "corrupti": [
      "provident",
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