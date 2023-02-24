<!-- Start SDK Example Usage -->
```typescript
import {
  GetApisRequest,
  GetApisResponse 
} from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const sdk = new SDK({
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
});
    
const req: GetApisRequest = {
  queryParams: {
    metadata: {
      "deserunt": [
        "nulla",
        "id",
        "vero",
      ],
      "perspiciatis": [
        "nihil",
        "fuga",
        "facilis",
        "eum",
      ],
      "iusto": [
        "saepe",
        "inventore",
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