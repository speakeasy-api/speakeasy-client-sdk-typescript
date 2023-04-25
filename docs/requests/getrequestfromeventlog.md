# getRequestFromEventLog
Available in: `requests`

Get information about a particular request.

## Example Usage
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