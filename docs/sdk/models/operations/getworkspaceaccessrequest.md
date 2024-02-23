# GetWorkspaceAccessRequest


## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `genLockId`                                  | *string*                                     | :heavy_minus_sign:                           | Unique identifier of the generation target.  |
| `passive`                                    | *boolean*                                    | :heavy_minus_sign:                           | Skip side-effects like incrementing metrics. |
| `targetType`                                 | *string*                                     | :heavy_minus_sign:                           | The type of the generated target.            |