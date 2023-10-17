<!-- Start SDK Example Usage -->


```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

(async () => {
    const sdk = new Speakeasy({
        security: {
            apiKey: "",
        },
    });

    const res = await sdk.apis.getApis({
        metadata: {
            South: ["Southwest"],
        },
        op: {
            and: false,
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->