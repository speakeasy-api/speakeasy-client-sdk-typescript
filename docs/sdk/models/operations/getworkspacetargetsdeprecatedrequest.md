# GetWorkspaceTargetsDeprecatedRequest

## Example Usage

```typescript
import { GetWorkspaceTargetsDeprecatedRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetWorkspaceTargetsDeprecatedRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier of the workspace.                                                           |
| `afterLastEventCreatedAt`                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter to only return targets with events created after this timestamp                        |