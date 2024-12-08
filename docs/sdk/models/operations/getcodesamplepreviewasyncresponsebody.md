# GetCodeSamplePreviewAsyncResponseBody

Job is still in progress

## Example Usage

```typescript
import { GetCodeSamplePreviewAsyncResponseBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetCodeSamplePreviewAsyncResponseBody = {
  status: "pending",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `status`                                                                          | [shared.CodeSamplesJobStatus](../../../sdk/models/shared/codesamplesjobstatus.md) | :heavy_check_mark:                                                                | The current status of the job. Possible values are `pending` or `running`.        |