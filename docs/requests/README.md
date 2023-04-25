# requests

## Overview

REST APIs for retrieving request information

### Available Operations

* [generateRequestPostmanCollection](#generaterequestpostmancollection) - Generate a Postman collection for a particular request.
* [getRequestFromEventLog](#getrequestfromeventlog) - Get information about a particular request.
* [queryEventLog](#queryeventlog) - Query the event log to retrieve a list of requests.

## generateRequestPostmanCollection

Generates a Postman collection for a particular request. 
Allowing it to be replayed with the same inputs that were captured by the SDK.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import {
  GenerateRequestPostmanCollectionRequest,
  GenerateRequestPostmanCollectionResponse,
} from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GenerateRequestPostmanCollectionRequest = {
  requestID: "quo",
};

sdk.requests.generateRequestPostmanCollection(req).then((res: GenerateRequestPostmanCollectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getRequestFromEventLog

Get information about a particular request.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetRequestFromEventLogRequest, GetRequestFromEventLogResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetRequestFromEventLogRequest = {
  requestID: "sequi",
};

sdk.requests.getRequestFromEventLog(req).then((res: GetRequestFromEventLogResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## queryEventLog

Supports retrieving a list of request captured by the SDK for this workspace.
Allows the filtering of requests on a number of criteria such as ApiID, VersionID, Path, Method, etc.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { QueryEventLogRequest, QueryEventLogResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: QueryEventLogRequest = {
  filters: {
    filters: [
      {
        key: "ipsam",
        operator: "id",
        value: "possimus",
      },
      {
        key: "aut",
        operator: "quasi",
        value: "error",
      },
      {
        key: "temporibus",
        operator: "laborum",
        value: "quasi",
      },
      {
        key: "reiciendis",
        operator: "voluptatibus",
        value: "vero",
      },
    ],
    limit: 468651,
    offset: 509624,
    operator: "voluptatibus",
  },
};

sdk.requests.queryEventLog(req).then((res: QueryEventLogResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
