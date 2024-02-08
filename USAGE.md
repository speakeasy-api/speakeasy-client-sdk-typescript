<!-- Start SDK Example Usage [usage] -->
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

async function run() {
    const sdk = new Speakeasy({
        security: {
            apiKey: "<YOUR_API_KEY_HERE>",
        },
        workspaceID: "string",
    });

    const res = await sdk.apis.getApis({
        metadata: {
            key: ["string"],
        },
        op: {
            and: false,
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->