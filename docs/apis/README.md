# apis

## Overview

REST APIs for managing Api entities

### Available Operations

* [deleteApi](#deleteapi) - Delete an Api.
* [generateOpenApiSpec](#generateopenapispec) - Generate an OpenAPI specification for a particular Api.
* [generatePostmanCollection](#generatepostmancollection) - Generate a Postman collection for a particular Api.
* [getAllApiVersions](#getallapiversions) - Get all Api versions for a particular ApiEndpoint.
* [getApis](#getapis) - Get a list of Apis for a given workspace
* [upsertApi](#upsertapi) - Upsert an Api

## deleteApi

Delete a particular version of an Api. The will also delete all associated ApiEndpoints, Metadata, Schemas & Request Logs (if using a Postgres datastore).

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DeleteApiResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "",
  },
});

sdk.apis.deleteApi({
  apiID: "quod",
  versionID: "esse",
}).then((res: DeleteApiResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## generateOpenApiSpec

This endpoint will generate any missing operations in any registered OpenAPI document if the operation does not already exist in the document.
Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GenerateOpenApiSpecResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "",
  },
});

sdk.apis.generateOpenApiSpec({
  apiID: "totam",
  versionID: "porro",
}).then((res: GenerateOpenApiSpecResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## generatePostmanCollection

Generates a postman collection containing all endpoints for a particular API. Includes variables produced for any path/query/header parameters included in the OpenAPI document.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GeneratePostmanCollectionResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "",
  },
});

sdk.apis.generatePostmanCollection({
  apiID: "dolorum",
  versionID: "dicta",
}).then((res: GeneratePostmanCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAllApiVersions

Get all Api versions for a particular ApiEndpoint.
Supports filtering the versions based on metadata attributes.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetAllApiVersionsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "",
  },
});

sdk.apis.getAllApiVersions({
  apiID: "nam",
  metadata: {
    "occaecati": [
      "deleniti",
    ],
    "hic": [
      "totam",
      "beatae",
      "commodi",
      "molestiae",
    ],
    "modi": [
      "impedit",
    ],
  },
  op: {
    and: false,
  },
}).then((res: GetAllApiVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getApis

Get a list of all Apis and their versions for a given workspace.
Supports filtering the APIs based on metadata attributes.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetApisResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "",
  },
});

sdk.apis.getApis({
  metadata: {
    "esse": [
      "excepturi",
    ],
    "aspernatur": [
      "ad",
    ],
    "natus": [
      "iste",
    ],
  },
  op: {
    and: false,
  },
}).then((res: GetApisResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## upsertApi

Upsert an Api. If the Api does not exist, it will be created.
If the Api exists, it will be updated.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { UpsertApiResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "",
  },
});

sdk.apis.upsertApi({
  apiInput: {
    apiId: "dolor",
    description: "natus",
    metaData: {
      "hic": [
        "fuga",
        "in",
        "corporis",
        "iste",
      ],
      "iure": [
        "quidem",
        "architecto",
        "ipsa",
        "reiciendis",
      ],
    },
    versionId: "est",
  },
  apiID: "mollitia",
}).then((res: UpsertApiResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
