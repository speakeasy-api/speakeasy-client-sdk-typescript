# queryEventLog
Available in: `requests`

Supports retrieving a list of request captured by the SDK for this workspace.
Allows the filtering of requests on a number of criteria such as ApiID, VersionID, Path, Method, etc.

## Example Usage
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