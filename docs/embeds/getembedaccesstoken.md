# getEmbedAccessToken
Available in: `embeds`

Returns an embed access token for the current workspace. This can be used to authenticate access to externally embedded content.
Filters can be applied allowing views to be filtered to things like particular customerIds.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetEmbedAccessTokenRequest, GetEmbedAccessTokenResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetEmbedAccessTokenRequest = {
  description: "laborum",
  duration: 170909,
  filters: {
    filters: [
      {
        key: "corporis",
        operator: "explicabo",
        value: "nobis",
      },
    ],
    limit: 315428,
    offset: 607831,
    operator: "nemo",
  },
};

sdk.embeds.getEmbedAccessToken(req).then((res: GetEmbedAccessTokenResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```