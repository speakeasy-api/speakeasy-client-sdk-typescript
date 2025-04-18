# Workspace

A speakeasy workspace

## Example Usage

```typescript
import { Workspace } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Workspace = {
  createdAt: new Date("2024-09-06T14:20:55.891Z"),
  id: "<id>",
  name: "<value>",
  organizationId: "<id>",
  slug: "<value>",
  updatedAt: new Date("2024-12-30T03:33:44.776Z"),
  verified: false,
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                     | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `id`                                                                                                                                                                              | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `inactive`                                                                                                                                                                        | *boolean*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `name`                                                                                                                                                                            | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `organizationId`                                                                                                                                                                  | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `slug`                                                                                                                                                                            | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| ~~`telemetryDisabled`~~                                                                                                                                                           | *boolean*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use organization.telemetry_disabled instead. |
| `updatedAt`                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                     | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `verified`                                                                                                                                                                        | *boolean*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |