# GithubSetupStateResponse

The state of a particular SDK targets github setup

## Example Usage

```typescript
import { GithubSetupStateResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GithubSetupStateResponse = {
  actions: {
    generationActionConfigured: true,
    publishActionConfigured: false,
  },
  appInstalled: true,
  secrets: {
    apiKeyConfigured: true,
    publishingSecretsConfigured: false,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `actions`                                               | [shared.Actions](../../../sdk/models/shared/actions.md) | :heavy_check_mark:                                      | N/A                                                     |
| `appInstalled`                                          | *boolean*                                               | :heavy_check_mark:                                      | N/A                                                     |
| `secrets`                                               | [shared.Secrets](../../../sdk/models/shared/secrets.md) | :heavy_check_mark:                                      | N/A                                                     |