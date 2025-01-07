# GenerateCodeSamplePreviewAsyncResponseBody

Job accepted, returns a job ID to poll for status and result

## Example Usage

```typescript
import { GenerateCodeSamplePreviewAsyncResponseBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GenerateCodeSamplePreviewAsyncResponseBody = {
  jobId: "<id>",
  status: "pending",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `jobId`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | The job ID for polling                                                            |
| `status`                                                                          | [shared.CodeSamplesJobStatus](../../../sdk/models/shared/codesamplesjobstatus.md) | :heavy_check_mark:                                                                | The current status of the job. Possible values are `pending` or `running`.        |