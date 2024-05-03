# AddTags

Request body of tags to add to a revision


## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `revisionDigest`                           | *string*                                   | :heavy_check_mark:                         | revision digest to add tags too sha256:... |
| `tags`                                     | *string*[]                                 | :heavy_check_mark:                         | string tags to add to the revision         |