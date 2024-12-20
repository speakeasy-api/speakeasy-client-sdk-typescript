<!-- Start SDK Example Usage [usage] -->
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { openAsBlob } from "node:fs";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.generateCodeSamplePreview({
    languages: [
      "<value>",
      "<value>",
    ],
    schemaFile: await openAsBlob("example.file"),
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->