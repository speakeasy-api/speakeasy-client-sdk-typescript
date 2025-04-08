# RevisionContentsMetadata

## Example Usage

```typescript
import { RevisionContentsMetadata } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: RevisionContentsMetadata = {
  containsCodeSamples: false,
  createdAt: new Date("2023-03-29T23:52:27.454Z"),
  description:
    "among jubilantly fireplace physical rebuild per definitive gracefully failing unfinished",
  hash: "<value>",
  namespace: "<value>",
  numOverlayActions: 955994,
  operationIds: [
    "<value>",
  ],
  revisionDigest: "<value>",
  tags: [
    "<value>",
  ],
  title: "<value>",
  type: "OPENAPI_BUNDLE",
  version: "<value>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `containsCodeSamples`                                                                             | *boolean*                                                                                         | :heavy_check_mark:                                                                                | Whether the OAS contains code samples.                                                            |
| `createdAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `description`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | The OAS description                                                                               |
| `hash`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | The hash of the contents                                                                          |
| `namespace`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | The fully qualified namespace                                                                     |
| `numOverlayActions`                                                                               | *number*                                                                                          | :heavy_check_mark:                                                                                | The number of overlay actions in the OAS. Will be 0 if the OAS is not an overlay.                 |
| `operationIds`                                                                                    | *string*[]                                                                                        | :heavy_check_mark:                                                                                | The operation IDs contained in the OAS. Will be empty if the OAS is an overlay.                   |
| `revisionDigest`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | The digest of the parent bundle                                                                   |
| `tags`                                                                                            | *string*[]                                                                                        | :heavy_check_mark:                                                                                | The tags contained in the OAS -- NOT the OCI tags. Will be empty if the OAS is an overlay.        |
| `title`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | The OAS title                                                                                     |
| `type`                                                                                            | [shared.RevisionContentsMetadataType](../../../sdk/models/shared/revisioncontentsmetadatatype.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `version`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | The OAS version                                                                                   |
| `workspaceId`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | The workspace ID                                                                                  |