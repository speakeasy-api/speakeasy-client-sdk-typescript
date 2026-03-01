# TargetBillingBreakdown

Contains the billing breakdown for a single target

## Example Usage

```typescript
import { TargetBillingBreakdown } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: TargetBillingBreakdown = {
  genLockId: "<id>",
  isActive: true,
  target: "<value>",
  targetName: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `genLockId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The generation lock ID for this target                                                        |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the target is active (source namespace is not archived)                               |
| `lastGeneratedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of the most recent SDK generation for this target                                   |
| `target`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The target type (e.g., typescript, python)                                                    |
| `targetName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The workflow name of this target                                                              |