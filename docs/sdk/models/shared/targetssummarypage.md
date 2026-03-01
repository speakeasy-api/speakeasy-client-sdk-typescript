# TargetsSummaryPage

Paginated response containing a list of target summaries

## Example Usage

```typescript
import { TargetsSummaryPage } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: TargetsSummaryPage = {
  hasMore: false,
  targets: [],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `hasMore`                                                                   | *boolean*                                                                   | :heavy_check_mark:                                                          | Whether there are more results available                                    |
| `nextCursor`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | Opaque cursor for the next page. Null if no more pages.                     |
| `targets`                                                                   | [shared.TargetSDKSummary](../../../sdk/models/shared/targetsdksummary.md)[] | :heavy_check_mark:                                                          | List of target summaries for the current page                               |