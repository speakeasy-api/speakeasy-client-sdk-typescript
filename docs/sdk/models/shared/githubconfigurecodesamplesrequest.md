# GithubConfigureCodeSamplesRequest

A request to configure GitHub code samples

## Example Usage

```typescript
import { GithubConfigureCodeSamplesRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GithubConfigureCodeSamplesRequest = {
  org: "<value>",
  repo: "<value>",
  targetName: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `org`                                | *string*                             | :heavy_check_mark:                   | The GitHub organization name         |
| `repo`                               | *string*                             | :heavy_check_mark:                   | The GitHub repository name           |
| `targetName`                         | *string*                             | :heavy_check_mark:                   | The target name for the code samples |