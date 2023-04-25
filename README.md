# @speakeasy-api/speakeasy-client-sdk-typescript

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-api/speakeasy-client-sdk-typescript
```

### Yarn

```bash
yarn add @speakeasy-api/speakeasy-client-sdk-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetApisRequest, GetApisResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetApisRequest = {
  metadata: {
    "provident": [
      "quibusdam",
      "unde",
      "nulla",
    ],
    "corrupti": [
      "vel",
      "error",
      "deserunt",
      "suscipit",
    ],
    "iure": [
      "debitis",
      "ipsa",
    ],
  },
  op: {
    and: false,
  },
};

sdk.apis.getApis(req).then((res: GetApisResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Speakeasy SDK](docs/speakeasy/README.md)

* [validateApiKey](docs/speakeasy/validateapikey.md) - Validate the current api key.

### [apiEndpoints](docs/apiendpoints/README.md)

* [deleteApiEndpoint](docs/apiendpoints/deleteapiendpoint.md) - Delete an ApiEndpoint.
* [findApiEndpoint](docs/apiendpoints/findapiendpoint.md) - Find an ApiEndpoint via its displayName.
* [generateOpenApiSpecForApiEndpoint](docs/apiendpoints/generateopenapispecforapiendpoint.md) - Generate an OpenAPI specification for a particular ApiEndpoint.
* [generatePostmanCollectionForApiEndpoint](docs/apiendpoints/generatepostmancollectionforapiendpoint.md) - Generate a Postman collection for a particular ApiEndpoint.
* [getAllApiEndpoints](docs/apiendpoints/getallapiendpoints.md) - Get all Api endpoints for a particular apiID.
* [getAllForVersionApiEndpoints](docs/apiendpoints/getallforversionapiendpoints.md) - Get all ApiEndpoints for a particular apiID and versionID.
* [getApiEndpoint](docs/apiendpoints/getapiendpoint.md) - Get an ApiEndpoint.
* [upsertApiEndpoint](docs/apiendpoints/upsertapiendpoint.md) - Upsert an ApiEndpoint.

### [apis](docs/apis/README.md)

* [deleteApi](docs/apis/deleteapi.md) - Delete an Api.
* [generateOpenApiSpec](docs/apis/generateopenapispec.md) - Generate an OpenAPI specification for a particular Api.
* [generatePostmanCollection](docs/apis/generatepostmancollection.md) - Generate a Postman collection for a particular Api.
* [getAllApiVersions](docs/apis/getallapiversions.md) - Get all Api versions for a particular ApiEndpoint.
* [getApis](docs/apis/getapis.md) - Get a list of Apis for a given workspace
* [upsertApi](docs/apis/upsertapi.md) - Upsert an Api

### [embeds](docs/embeds/README.md)

* [getEmbedAccessToken](docs/embeds/getembedaccesstoken.md) - Get an embed access token for the current workspace.
* [getValidEmbedAccessTokens](docs/embeds/getvalidembedaccesstokens.md) - Get all valid embed access tokens for the current workspace.
* [revokeEmbedAccessToken](docs/embeds/revokeembedaccesstoken.md) - Revoke an embed access EmbedToken.

### [metadata](docs/metadata/README.md)

* [deleteVersionMetadata](docs/metadata/deleteversionmetadata.md) - Delete metadata for a particular apiID and versionID.
* [getVersionMetadata](docs/metadata/getversionmetadata.md) - Get all metadata for a particular apiID and versionID.
* [insertVersionMetadata](docs/metadata/insertversionmetadata.md) - Insert metadata for a particular apiID and versionID.

### [plugins](docs/plugins/README.md)

* [getPlugins](docs/plugins/getplugins.md) - Get all plugins for the current workspace.
* [runPlugin](docs/plugins/runplugin.md) - Run a plugin
* [upsertPlugin](docs/plugins/upsertplugin.md) - Upsert a plugin

### [requests](docs/requests/README.md)

* [generateRequestPostmanCollection](docs/requests/generaterequestpostmancollection.md) - Generate a Postman collection for a particular request.
* [getRequestFromEventLog](docs/requests/getrequestfromeventlog.md) - Get information about a particular request.
* [queryEventLog](docs/requests/queryeventlog.md) - Query the event log to retrieve a list of requests.

### [schemas](docs/schemas/README.md)

* [deleteSchema](docs/schemas/deleteschema.md) - Delete a particular schema revision for an Api.
* [downloadSchema](docs/schemas/downloadschema.md) - Download the latest schema for a particular apiID.
* [downloadSchemaRevision](docs/schemas/downloadschemarevision.md) - Download a particular schema revision for an Api.
* [getSchema](docs/schemas/getschema.md) - Get information about the latest schema.
* [getSchemaDiff](docs/schemas/getschemadiff.md) - Get a diff of two schema revisions for an Api.
* [getSchemaRevision](docs/schemas/getschemarevision.md) - Get information about a particular schema revision for an Api.
* [getSchemas](docs/schemas/getschemas.md) - Get information about all schemas associated with a particular apiID.
* [registerSchema](docs/schemas/registerschema.md) - Register a schema.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
