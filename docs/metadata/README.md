# metadata

## Overview

REST APIs for managing Version Metadata entities

### Available Operations

* [deleteVersionMetadata](#deleteversionmetadata) - Delete metadata for a particular apiID and versionID.
* [getVersionMetadata](#getversionmetadata) - Get all metadata for a particular apiID and versionID.
* [insertVersionMetadata](#insertversionmetadata) - Insert metadata for a particular apiID and versionID.

## deleteVersionMetadata

Delete metadata for a particular apiID and versionID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DeleteVersionMetadataResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.metadata.deleteVersionMetadata({
  apiID: "excepturi",
  metaKey: "accusantium",
  metaValue: "iure",
  versionID: "culpa",
}).then((res: DeleteVersionMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getVersionMetadata

Get all metadata for a particular apiID and versionID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetVersionMetadataResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.metadata.getVersionMetadata({
  apiID: "doloribus",
  versionID: "sapiente",
}).then((res: GetVersionMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## insertVersionMetadata

Insert metadata for a particular apiID and versionID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { InsertVersionMetadataResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.metadata.insertVersionMetadata({
  versionMetadataInput: {
    metaKey: "architecto",
    metaValue: "mollitia",
  },
  apiID: "dolorem",
  versionID: "culpa",
}).then((res: InsertVersionMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
