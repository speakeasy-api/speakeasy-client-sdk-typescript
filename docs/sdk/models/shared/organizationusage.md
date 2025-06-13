# OrganizationUsage

## Example Usage

```typescript
import { OrganizationUsage } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: OrganizationUsage = {
  accessible: false,
  accessibleFeatures: [
    "<value 1>",
  ],
  genLockIds: [],
  language: "<value>",
  maxOperations: 131985,
  numberOfOperations: 421782,
  usedFeatures: [],
  workspaces: [],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `accessible`                                              | *boolean*                                                 | :heavy_check_mark:                                        | Indicates if the features are accessible                  |
| `accessibleFeatures`                                      | *string*[]                                                | :heavy_check_mark:                                        | Features that are accessible                              |
| `genLockIds`                                              | *string*[]                                                | :heavy_check_mark:                                        | List of generation lock IDs                               |
| `language`                                                | *string*                                                  | :heavy_check_mark:                                        | The programming language used                             |
| `maxOperations`                                           | *number*                                                  | :heavy_check_mark:                                        | Maximum Number of operations per SDK specific in contract |
| `numberOfOperations`                                      | *number*                                                  | :heavy_check_mark:                                        | Number of operations performed                            |
| `usedFeatures`                                            | *string*[]                                                | :heavy_check_mark:                                        | Features that have been used                              |
| `workspaces`                                              | *string*[]                                                | :heavy_check_mark:                                        | List of workspace IDs                                     |