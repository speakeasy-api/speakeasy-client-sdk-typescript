<!-- Start SDK Example Usage [usage] -->
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy();

async function run() {
    const result = await speakeasy.apis.getApis({});

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->