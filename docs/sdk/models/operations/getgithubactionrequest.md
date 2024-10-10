# GetGitHubActionRequest

## Example Usage

```typescript
import { GetGitHubActionRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetGitHubActionRequest = {
  org: "<value>",
  repo: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `targetName`                           | *string*                               | :heavy_minus_sign:                     | The targetName of the workflow target. |
| `org`                                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `repo`                                 | *string*                               | :heavy_check_mark:                     | N/A                                    |