<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetApisRequest, GetApisResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetApisRequest = {
  queryParams: {
    metadata: {
      "voluptas": [
        "expedita",
        "consequuntur",
      ],
    },
    op: {
      and: false,
    },
  },
};

sdk.apis.getApis(req).then((res: GetApisResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->