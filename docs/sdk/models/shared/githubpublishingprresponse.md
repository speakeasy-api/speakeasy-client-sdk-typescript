# GithubPublishingPRResponse

Open generation PRs pending publishing

## Example Usage

```typescript
import { GithubPublishingPRResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GithubPublishingPRResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `pendingVersion`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `pullRequest`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `pullRequestMetadata`                                                           | [shared.PullRequestMetadata](../../../sdk/models/shared/pullrequestmetadata.md) | :heavy_minus_sign:                                                              | This can only be populated when the github app is installed for a repo          |