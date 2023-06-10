# GetAllApiVersionsRequest


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `apiID`                                                               | *string*                                                              | :heavy_check_mark:                                                    | The ID of the Api to retrieve.                                        |
| `metadata`                                                            | Record<string, *string*[]>                                            | :heavy_minus_sign:                                                    | Metadata to filter Apis on                                            |
| `op`                                                                  | [GetAllApiVersionsOp](../../models/operations/getallapiversionsop.md) | :heavy_minus_sign:                                                    | Configuration for filter operations                                   |