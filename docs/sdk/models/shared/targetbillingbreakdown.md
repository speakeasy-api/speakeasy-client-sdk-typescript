# TargetBillingBreakdown

Contains the billing breakdown for a single target

## Example Usage

```typescript
import { TargetBillingBreakdown } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: TargetBillingBreakdown = {
  genLockId: "<id>",
  isActive: true,
  operationCount: 604397,
  target: "<value>",
  targetName: "<value>",
  workspaceSlug: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `billingStatus`                                                                               | [shared.BillingStatus](../../../sdk/models/shared/billingstatus.md)                           | :heavy_minus_sign:                                                                            | The billing status of this target                                                             |
| `canDeactivate`                                                                               | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether this target can be deactivated (subject to 2-week cooldown)                           |
| `deactivated`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the target has been deactivated by the user                                           |
| `deactivationScheduledAt`                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when the target is scheduled to be deactivated (for self-serve business tier)       |
| `genLockId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The generation lock ID for this target                                                        |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the target is active (source namespace is not archived)                               |
| `lastGeneratedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of the most recent SDK generation for this target                                   |
| `namespaceName`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Source spec namespace slug when the generation event is linked to a spec                      |
| `operationCount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of operations captured on the generation event for this target                         |
| `target`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The target type (e.g., typescript, python)                                                    |
| `targetName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The workflow name of this target                                                              |
| `trialEndsAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when the trial period ends for this target                                          |
| `workspaceSlug`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Slug of the workspace that owns this target                                                   |