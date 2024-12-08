# BoundedRequest

A BoundedRequest is a request that has been logged by the Speakeasy without the contents of the request.

## Example Usage

```typescript
import { BoundedRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: BoundedRequest = {
  apiEndpointId: "<id>",
  apiId: "<id>",
  createdAt: new Date("2022-06-03T03:52:22.682Z"),
  customerId: "<id>",
  latency: 330596,
  method: "<value>",
  path: "/boot/defaults",
  requestFinishTime: new Date("2022-12-30T01:41:47.858Z"),
  requestId: "<id>",
  requestStartTime: new Date("2022-12-18T01:51:45.505Z"),
  status: 946808,
  versionId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `apiEndpointId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the ApiEndpoint this request was made to.                                           |
| `apiId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the Api this request was made to.                                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp.                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the customer that made this request.                                                |
| `latency`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The latency of the request.                                                                   |
| `metadata`                                                                                    | [shared.RequestMetadata](../../../sdk/models/shared/requestmetadata.md)[]                     | :heavy_minus_sign:                                                                            | Metadata associated with this request                                                         |
| `method`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP verb.                                                                                    |
| `path`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The path of the request.                                                                      |
| `requestFinishTime`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the request finished.                                                                |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of this request.                                                                       |
| `requestStartTime`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the request was made.                                                                |
| `status`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The status code of the request.                                                               |
| `versionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The version ID of the Api this request was made to.                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The workspace ID this request was made to.                                                    |