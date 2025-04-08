# GetGithubSetupStateResponse


## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 101,
};
```

### `shared.GithubSetupStateResponse`

```typescript
const value: shared.GithubSetupStateResponse = {
  actions: {
    generationActionConfigured: false,
    publishActionConfigured: false,
  },
  appInstalled: false,
  secrets: {
    apiKeyConfigured: false,
    publishingSecretsConfigured: false,
  },
};
```

