# revokeEmbedAccessToken
Available in: `embeds`

Revoke an embed access EmbedToken.

## Example Usage
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { RevokeEmbedAccessTokenRequest, RevokeEmbedAccessTokenResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: RevokeEmbedAccessTokenRequest = {
  tokenID: "minima",
};

sdk.embeds.revokeEmbedAccessToken(req).then((res: RevokeEmbedAccessTokenResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```