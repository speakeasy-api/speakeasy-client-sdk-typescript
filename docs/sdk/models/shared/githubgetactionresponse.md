# GithubGetActionResponse

response to a getting the latest action run on a GitHub request

## Example Usage

```typescript
import { GithubGetActionResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GithubGetActionResponse = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `runStatus`                                      | *string*                                         | :heavy_minus_sign:                               | The status of the latest action run if available |
| `runUrl`                                         | *string*                                         | :heavy_minus_sign:                               | The URL for latest action run if available       |