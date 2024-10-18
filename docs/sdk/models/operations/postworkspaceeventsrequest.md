# PostWorkspaceEventsRequest

## Example Usage

```typescript
import { PostWorkspaceEventsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: PostWorkspaceEventsRequest = {
  workspaceId: "<id>",
  requestBody: [
    {
      createdAt: new Date("2024-07-20T06:14:33.034Z"),
      executionId: "<id>",
      id: "<id>",
      interactionType: "CI_EXEC",
      localStartedAt: new Date("2022-12-06T23:22:56.589Z"),
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
| `workspaceId`                                               | *string*                                                    | :heavy_check_mark:                                          | Unique identifier of the workspace.                         |
| `requestBody`                                               | [shared.CliEvent](../../../sdk/models/shared/clievent.md)[] | :heavy_check_mark:                                          | N/A                                                         |