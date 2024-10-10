# GithubTriggerActionRequest

A request to trigger an action on a GitHub target

## Example Usage

```typescript
import { GithubTriggerActionRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GithubTriggerActionRequest = {
  genLockId: "<id>",
  org: "<value>",
  repoName: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `force`                                                | *boolean*                                              | :heavy_minus_sign:                                     | Force an SDK generation                                |
| `genLockId`                                            | *string*                                               | :heavy_check_mark:                                     | The generation lock ID                                 |
| `org`                                                  | *string*                                               | :heavy_check_mark:                                     | The GitHub organization name                           |
| `repoName`                                             | *string*                                               | :heavy_check_mark:                                     | The GitHub repository name                             |
| `setVersion`                                           | *string*                                               | :heavy_minus_sign:                                     | A version to override the SDK too in workflow dispatch |
| `targetName`                                           | *string*                                               | :heavy_minus_sign:                                     | The target name for the action                         |