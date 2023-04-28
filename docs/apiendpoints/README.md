# apiEndpoints

## Overview

REST APIs for managing ApiEndpoint entities

### Available Operations

* [deleteApiEndpoint](#deleteapiendpoint) - Delete an ApiEndpoint.
* [findApiEndpoint](#findapiendpoint) - Find an ApiEndpoint via its displayName.
* [generateOpenApiSpecForApiEndpoint](#generateopenapispecforapiendpoint) - Generate an OpenAPI specification for a particular ApiEndpoint.
* [generatePostmanCollectionForApiEndpoint](#generatepostmancollectionforapiendpoint) - Generate a Postman collection for a particular ApiEndpoint.
* [getAllApiEndpoints](#getallapiendpoints) - Get all Api endpoints for a particular apiID.
* [getAllForVersionApiEndpoints](#getallforversionapiendpoints) - Get all ApiEndpoints for a particular apiID and versionID.
* [getApiEndpoint](#getapiendpoint) - Get an ApiEndpoint.
* [upsertApiEndpoint](#upsertapiendpoint) - Upsert an ApiEndpoint.

## deleteApiEndpoint

Delete an ApiEndpoint. This will also delete all associated Request Logs (if using a Postgres datastore).

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { DeleteApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.apiEndpoints.deleteApiEndpoint({
  apiEndpointID: "delectus",
  apiID: "tempora",
  versionID: "suscipit",
}).then((res: DeleteApiEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## findApiEndpoint

Find an ApiEndpoint via its displayName (set by operationId from a registered OpenAPI schema).
This is useful for finding the ID of an ApiEndpoint to use in the /v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID} endpoints.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { FindApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.apiEndpoints.findApiEndpoint({
  apiID: "molestiae",
  displayName: "minus",
  versionID: "placeat",
}).then((res: FindApiEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## generateOpenApiSpecForApiEndpoint

This endpoint will generate a new operation in any registered OpenAPI document if the operation does not already exist in the document.
Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GenerateOpenApiSpecForApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.apiEndpoints.generateOpenApiSpecForApiEndpoint({
  apiEndpointID: "voluptatum",
  apiID: "iusto",
  versionID: "excepturi",
}).then((res: GenerateOpenApiSpecForApiEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## generatePostmanCollectionForApiEndpoint

Generates a postman collection that allows the endpoint to be called from postman variables produced for any path/query/header parameters included in the OpenAPI document.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GeneratePostmanCollectionForApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.apiEndpoints.generatePostmanCollectionForApiEndpoint({
  apiEndpointID: "nisi",
  apiID: "recusandae",
  versionID: "temporibus",
}).then((res: GeneratePostmanCollectionForApiEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAllApiEndpoints

Get all Api endpoints for a particular apiID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetAllApiEndpointsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.apiEndpoints.getAllApiEndpoints({
  apiID: "ab",
}).then((res: GetAllApiEndpointsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAllForVersionApiEndpoints

Get all ApiEndpoints for a particular apiID and versionID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetAllForVersionApiEndpointsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.apiEndpoints.getAllForVersionApiEndpoints({
  apiID: "quis",
  versionID: "veritatis",
}).then((res: GetAllForVersionApiEndpointsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getApiEndpoint

Get an ApiEndpoint.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.apiEndpoints.getApiEndpoint({
  apiEndpointID: "deserunt",
  apiID: "perferendis",
  versionID: "ipsam",
}).then((res: GetApiEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## upsertApiEndpoint

Upsert an ApiEndpoint. If the ApiEndpoint does not exist it will be created, otherwise it will be updated.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { UpsertApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.apiEndpoints.upsertApiEndpoint({
  apiEndpointInput: {
    apiEndpointId: "repellendus",
    description: "sapiente",
    displayName: "quo",
    method: "odit",
    path: "at",
    versionId: "at",
  },
  apiEndpointID: "maiores",
  apiID: "molestiae",
  versionID: "quod",
}).then((res: UpsertApiEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
