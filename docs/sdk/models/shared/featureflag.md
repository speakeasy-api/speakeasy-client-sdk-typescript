# FeatureFlag

A feature flag is a key-value pair that can be used to enable or disable features.

## Example Usage

```typescript
import { FeatureFlag } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: FeatureFlag = {
  featureFlag: "changes_report",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `featureFlag`                                                                                 | [shared.WorkspaceFeatureFlag](../../../sdk/models/shared/workspacefeatureflag.md)             | :heavy_check_mark:                                                                            | enum value workspace feature flag                                                             |
| `trialEndsAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |