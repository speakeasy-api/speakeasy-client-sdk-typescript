# SchemaDiff

A SchemaDiff represents a diff of two Schemas.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `additions`                                                                     | *string*[]                                                                      | :heavy_check_mark:                                                              | Holds every addition change in the diff.                                        |
| `deletions`                                                                     | *string*[]                                                                      | :heavy_check_mark:                                                              | Holds every deletion change in the diff.                                        |
| `modifications`                                                                 | Record<string, [shared.ValueChange](../../../sdk/models/shared/valuechange.md)> | :heavy_check_mark:                                                              | Holds every modification change in the diff.                                    |