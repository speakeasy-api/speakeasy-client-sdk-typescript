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
import { DeleteSchemaRequest, DeleteSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteSchemaRequest = {
  apiID: "ipsa",
  revisionID: "omnis",
  versionID: "voluptate",
};

sdk.schemas.deleteSchema(req).then((res: DeleteSchemaResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadSchema

Download the latest schema for a particular apiID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DownloadSchemaRequest, DownloadSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadSchemaRequest = {
  apiID: "cum",
  versionID: "perferendis",
};

sdk.schemas.downloadSchema(req).then((res: DownloadSchemaResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadSchemaRevision

Download a particular schema revision for an Api.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DownloadSchemaRevisionRequest, DownloadSchemaRevisionResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadSchemaRevisionRequest = {
  apiID: "doloremque",
  revisionID: "reprehenderit",
  versionID: "ut",
};

sdk.schemas.downloadSchemaRevision(req).then((res: DownloadSchemaRevisionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { GetSchemaRequest, GetSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetSchemaRequest = {
  apiID: "maiores",
  versionID: "dicta",
};

sdk.schemas.getSchema(req).then((res: GetSchemaResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSchemaDiff

Get a diff of two schema revisions for an Api.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetSchemaDiffRequest, GetSchemaDiffResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetSchemaDiffRequest = {
  apiID: "corporis",
  baseRevisionID: "dolore",
  targetRevisionID: "iusto",
  versionID: "dicta",
};

sdk.schemas.getSchemaDiff(req).then((res: GetSchemaDiffResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { GetSchemaRevisionRequest, GetSchemaRevisionResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetSchemaRevisionRequest = {
  apiID: "harum",
  revisionID: "enim",
  versionID: "accusamus",
};

sdk.schemas.getSchemaRevision(req).then((res: GetSchemaRevisionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { GetSchemasRequest, GetSchemasResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetSchemasRequest = {
  apiID: "commodi",
  versionID: "repudiandae",
};

sdk.schemas.getSchemas(req).then((res: GetSchemasResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { RegisterSchemaRequest, RegisterSchemaResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: RegisterSchemaRequest = {
  requestBody: {
    file: {
      content: "quae".encode(),
      file: "ipsum",
    },
  },
  apiID: "quidem",
  versionID: "molestias",
};

sdk.schemas.registerSchema(req).then((res: RegisterSchemaResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
