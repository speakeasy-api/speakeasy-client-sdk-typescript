<!-- Start SDK Example Usage [usage] -->
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.artifacts.createRemoteSource();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->