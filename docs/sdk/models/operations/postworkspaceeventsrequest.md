# PostWorkspaceEventsRequest

## Example Usage

```typescript
import { PostWorkspaceEventsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: PostWorkspaceEventsRequest = {
  requestBody: [
    {
      createdAt: new Date("2024-02-08T05:58:01.482Z"),
      executionId: "<id>",
      id: "<id>",
      interactionType: "TOMBSTONE",
      localStartedAt: new Date("2024-01-05T21:00:18.180Z"),
      speakeasyApiKeyName: "<value>",
      speakeasyVersion: "<value>",
      success: false,
      workspaceId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `workspaceId`                                               | *string*                                                    | :heavy_minus_sign:                                          | Unique identifier of the workspace.                         |
| `requestBody`                                               | [shared.CliEvent](../../../sdk/models/shared/clievent.md)[] | :heavy_check_mark:                                          | N/A                                                         |