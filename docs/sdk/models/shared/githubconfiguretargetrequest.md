# GithubConfigureTargetRequest

A request to configure a GitHub target

## Example Usage

```typescript
import { GithubConfigureTargetRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GithubConfigureTargetRequest = {
  org: "<value>",
  repoName: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `org`                        | *string*                     | :heavy_check_mark:           | The GitHub organization name |
| `repoName`                   | *string*                     | :heavy_check_mark:           | The GitHub repository name   |