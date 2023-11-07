# InsertVersionMetadataRequest


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `versionMetadata`                                                          | [shared.VersionMetadataInput](../../models/shared/versionmetadatainput.md) | :heavy_check_mark:                                                         | A JSON representation of the metadata to insert.                           |
| `apiID`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the Api to insert metadata for.                                  |
| `versionID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The version ID of the Api to insert metadata for.                          |