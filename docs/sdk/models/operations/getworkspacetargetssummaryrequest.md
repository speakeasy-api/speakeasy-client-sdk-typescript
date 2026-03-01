# GetWorkspaceTargetsSummaryRequest

## Example Usage

```typescript
import { GetWorkspaceTargetsSummaryRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetWorkspaceTargetsSummaryRequest = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `afterLastEventCreatedAt`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | Filter to only return targets with events created after this timestamp                              |
| `limit`                                                                                             | *number*                                                                                            | :heavy_minus_sign:                                                                                  | Maximum number of targets to return per page (default 50, max 200)                                  |
| `cursor`                                                                                            | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Opaque cursor for pagination. Pass the next_cursor from the previous response to get the next page. |