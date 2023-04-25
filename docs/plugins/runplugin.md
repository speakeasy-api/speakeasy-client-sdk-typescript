# runPlugin
Available in: `plugins`

Run a plugin

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { RunPluginRequest, RunPluginResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: RunPluginRequest = {
  filters: {
    filters: [
      {
        key: "repellat",
        operator: "mollitia",
        value: "occaecati",
      },
    ],
    limit: 253291,
    offset: 414369,
    operator: "quam",
  },
  pluginID: "molestiae",
};

sdk.plugins.runPlugin(req).then((res: RunPluginResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```