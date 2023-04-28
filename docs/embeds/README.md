# embeds

## Overview

REST APIs for managing embeds

### Available Operations

* [getEmbedAccessToken](#getembedaccesstoken) - Get an embed access token for the current workspace.
* [getValidEmbedAccessTokens](#getvalidembedaccesstokens) - Get all valid embed access tokens for the current workspace.
* [revokeEmbedAccessToken](#revokeembedaccesstoken) - Revoke an embed access EmbedToken.

## getEmbedAccessToken

Returns an embed access token for the current workspace. This can be used to authenticate access to externally embedded content.
Filters can be applied allowing views to be filtered to things like particular customerIds.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetEmbedAccessTokenResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.embeds.getEmbedAccessToken({
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
}).then((res: GetEmbedAccessTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getValidEmbedAccessTokens

Get all valid embed access tokens for the current workspace.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetValidEmbedAccessTokensResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.embeds.getValidEmbedAccessTokens().then((res: GetValidEmbedAccessTokensResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## revokeEmbedAccessToken

Revoke an embed access EmbedToken.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { RevokeEmbedAccessTokenResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.embeds.revokeEmbedAccessToken({
  tokenID: "minima",
}).then((res: RevokeEmbedAccessTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
