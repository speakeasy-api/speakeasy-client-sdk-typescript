# PostWorkspaceEventsRequest

## Example Usage

```typescript
import { PostWorkspaceEventsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: PostWorkspaceEventsRequest = {
  workspaceId: "<id>",
  requestBody: [
    {
      createdAt: new Date("2025-11-05T20:35:28.386Z"),
      executionId: "<id>",
      id: "<id>",
      interactionType: "TOMBSTONE",
      localStartedAt: new Date("2024-04-20T05:34:53.347Z"),
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