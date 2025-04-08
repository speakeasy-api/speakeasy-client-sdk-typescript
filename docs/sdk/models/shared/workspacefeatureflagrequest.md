# WorkspaceFeatureFlagRequest

A request to add workspace feature flags

## Example Usage

```typescript
import { WorkspaceFeatureFlagRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: WorkspaceFeatureFlagRequest = {
  featureFlags: [
    "schema_registry",
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `featureFlags`                                                                      | [shared.WorkspaceFeatureFlag](../../../sdk/models/shared/workspacefeatureflag.md)[] | :heavy_check_mark:                                                                  | N/A                                                                                 |