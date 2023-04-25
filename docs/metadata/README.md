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
import { DeleteVersionMetadataRequest, DeleteVersionMetadataResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteVersionMetadataRequest = {
  apiID: "excepturi",
  metaKey: "accusantium",
  metaValue: "iure",
  versionID: "culpa",
};

sdk.metadata.deleteVersionMetadata(req).then((res: DeleteVersionMetadataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getVersionMetadata

Get all metadata for a particular apiID and versionID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetVersionMetadataRequest, GetVersionMetadataResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetVersionMetadataRequest = {
  apiID: "doloribus",
  versionID: "sapiente",
};

sdk.metadata.getVersionMetadata(req).then((res: GetVersionMetadataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## insertVersionMetadata

Insert metadata for a particular apiID and versionID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { InsertVersionMetadataRequest, InsertVersionMetadataResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: InsertVersionMetadataRequest = {
  versionMetadataInput: {
    metaKey: "architecto",
    metaValue: "mollitia",
  },
  apiID: "dolorem",
  versionID: "culpa",
};

sdk.metadata.insertVersionMetadata(req).then((res: InsertVersionMetadataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
