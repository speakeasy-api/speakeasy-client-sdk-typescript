# SearchWorkspaceEventsRequest

## Example Usage

```typescript
import { SearchWorkspaceEventsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: SearchWorkspaceEventsRequest = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `workspaceId`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Unique identifier of the workspace.                                     |
| `sourceRevisionDigest`                                                  | *string*                                                                | :heavy_minus_sign:                                                      | Unique identifier of the source revision digest.                        |
| `lintReportDigest`                                                      | *string*                                                                | :heavy_minus_sign:                                                      | Unique identifier of the lint report digest.                            |
| `openapiDiffReportDigest`                                               | *string*                                                                | :heavy_minus_sign:                                                      | Unique identifier of the openapi diff report digest.                    |
| `interactionType`                                                       | [shared.InteractionType](../../../sdk/models/shared/interactiontype.md) | :heavy_minus_sign:                                                      | Specified interaction type for events.                                  |
| `generateGenLockId`                                                     | *string*                                                                | :heavy_minus_sign:                                                      | A specific gen lock ID for the events.                                  |
| `executionId`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Shared execution ID for cli events across a single action.              |
| `success`                                                               | *boolean*                                                               | :heavy_minus_sign:                                                      | Whether the event was successful or not.                                |
| `limit`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | Number of results to return.                                            |