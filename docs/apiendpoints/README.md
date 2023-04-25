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
import { DeleteApiEndpointRequest, DeleteApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteApiEndpointRequest = {
  apiEndpointID: "delectus",
  apiID: "tempora",
  versionID: "suscipit",
};

sdk.apiEndpoints.deleteApiEndpoint(req).then((res: DeleteApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { FindApiEndpointRequest, FindApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: FindApiEndpointRequest = {
  apiID: "molestiae",
  displayName: "minus",
  versionID: "placeat",
};

sdk.apiEndpoints.findApiEndpoint(req).then((res: FindApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import {
  GenerateOpenApiSpecForApiEndpointRequest,
  GenerateOpenApiSpecForApiEndpointResponse,
} from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GenerateOpenApiSpecForApiEndpointRequest = {
  apiEndpointID: "voluptatum",
  apiID: "iusto",
  versionID: "excepturi",
};

sdk.apiEndpoints.generateOpenApiSpecForApiEndpoint(req).then((res: GenerateOpenApiSpecForApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## generatePostmanCollectionForApiEndpoint

Generates a postman collection that allows the endpoint to be called from postman variables produced for any path/query/header parameters included in the OpenAPI document.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import {
  GeneratePostmanCollectionForApiEndpointRequest,
  GeneratePostmanCollectionForApiEndpointResponse,
} from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GeneratePostmanCollectionForApiEndpointRequest = {
  apiEndpointID: "nisi",
  apiID: "recusandae",
  versionID: "temporibus",
};

sdk.apiEndpoints.generatePostmanCollectionForApiEndpoint(req).then((res: GeneratePostmanCollectionForApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAllApiEndpoints

Get all Api endpoints for a particular apiID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetAllApiEndpointsRequest, GetAllApiEndpointsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetAllApiEndpointsRequest = {
  apiID: "ab",
};

sdk.apiEndpoints.getAllApiEndpoints(req).then((res: GetAllApiEndpointsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAllForVersionApiEndpoints

Get all ApiEndpoints for a particular apiID and versionID.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetAllForVersionApiEndpointsRequest, GetAllForVersionApiEndpointsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetAllForVersionApiEndpointsRequest = {
  apiID: "quis",
  versionID: "veritatis",
};

sdk.apiEndpoints.getAllForVersionApiEndpoints(req).then((res: GetAllForVersionApiEndpointsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getApiEndpoint

Get an ApiEndpoint.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetApiEndpointRequest, GetApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetApiEndpointRequest = {
  apiEndpointID: "deserunt",
  apiID: "perferendis",
  versionID: "ipsam",
};

sdk.apiEndpoints.getApiEndpoint(req).then((res: GetApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## upsertApiEndpoint

Upsert an ApiEndpoint. If the ApiEndpoint does not exist it will be created, otherwise it will be updated.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { UpsertApiEndpointRequest, UpsertApiEndpointResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: UpsertApiEndpointRequest = {
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
};

sdk.apiEndpoints.upsertApiEndpoint(req).then((res: UpsertApiEndpointResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
