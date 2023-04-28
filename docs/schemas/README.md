# schemas

## Overview

REST APIs for managing Schema entities

### Available Operations

* [deleteSchema](#deleteschema) - Delete a particular schema revision for an Api.
* [downloadSchema](#downloadschema) - Download the latest schema for a particular apiID.
* [downloadSchemaRevision](#downloadschemarevision) - Download a particular schema revision for an Api.
* [getSchema](#getschema) - Get information about the latest schema.
* [getSchemaDiff](#getschemadiff) - Get a diff of two schema revisions for an Api.
* [getSchemaRevision](#getschemarevision) - Get information about a particular schema revision for an Api.
* [getSchemas](#getschemas) - Get information about all schemas associated with a particular apiID.
* [registerSchema](#registerschema) - Register a schema.

## deleteSchema

Delete a particular schema revision for an Api.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DeleteSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.schemas.deleteSchema({
  apiID: "ipsa",
  revisionID: "omnis",
  versionID: "voluptate",
}).then((res: DeleteSchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadSchema

Download the latest schema for a particular apiID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DownloadSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.schemas.downloadSchema({
  apiID: "cum",
  versionID: "perferendis",
}).then((res: DownloadSchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadSchemaRevision

Download a particular schema revision for an Api.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DownloadSchemaRevisionResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.schemas.downloadSchemaRevision({
  apiID: "doloremque",
  revisionID: "reprehenderit",
  versionID: "ut",
}).then((res: DownloadSchemaRevisionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSchema

Returns information about the last uploaded schema for a particular API version. 
This won't include the schema itself, that can be retrieved via the downloadSchema operation.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.schemas.getSchema({
  apiID: "maiores",
  versionID: "dicta",
}).then((res: GetSchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSchemaDiff

Get a diff of two schema revisions for an Api.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetSchemaDiffResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.schemas.getSchemaDiff({
  apiID: "corporis",
  baseRevisionID: "dolore",
  targetRevisionID: "iusto",
  versionID: "dicta",
}).then((res: GetSchemaDiffResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSchemaRevision

Returns information about the last uploaded schema for a particular schema revision. 
This won't include the schema itself, that can be retrieved via the downloadSchema operation.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetSchemaRevisionResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.schemas.getSchemaRevision({
  apiID: "harum",
  revisionID: "enim",
  versionID: "accusamus",
}).then((res: GetSchemaRevisionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSchemas

Returns information the schemas associated with a particular apiID. 
This won't include the schemas themselves, they can be retrieved via the downloadSchema operation.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetSchemasResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.schemas.getSchemas({
  apiID: "commodi",
  versionID: "repudiandae",
}).then((res: GetSchemasResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## registerSchema

Allows uploading a schema for a particular API version.
This will be used to populate ApiEndpoints and used as a base for any schema generation if present.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { RegisterSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.schemas.registerSchema({
  requestBody: {
    file: {
      content: "quae".encode(),
      file: "ipsum",
    },
  },
  apiID: "quidem",
  versionID: "molestias",
}).then((res: RegisterSchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
