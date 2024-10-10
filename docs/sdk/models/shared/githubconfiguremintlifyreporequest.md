# GithubConfigureMintlifyRepoRequest

A request to configure a GitHub repository for mintlify

## Example Usage

```typescript
import { GithubConfigureMintlifyRepoRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GithubConfigureMintlifyRepoRequest = {
  input: "<value>",
  org: "<value>",
  overlays: [
    "<value>",
  ],
  repo: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `input`                                  | *string*                                 | :heavy_check_mark:                       | The input OpenAPI document               |
| `org`                                    | *string*                                 | :heavy_check_mark:                       | The GitHub organization name             |
| `overlays`                               | *string*[]                               | :heavy_check_mark:                       | The overlays to apply                    |
| `repo`                                   | *string*                                 | :heavy_check_mark:                       | The GitHub repository name               |
| `subdirectory`                           | *string*                                 | :heavy_minus_sign:                       | The subdirectory (location of mint.json) |