# PullRequestMetadata

This can only be populated when the github app is installed for a repo

## Example Usage

```typescript
import { PullRequestMetadata } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: PullRequestMetadata = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `baseBranch`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `canMerge`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | truncated to first 1000 characters                                                            |
| `headBranch`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `labels`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of github labels                                                                         |
| `requestedReviewers`                                                                          | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of github handles                                                                        |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |