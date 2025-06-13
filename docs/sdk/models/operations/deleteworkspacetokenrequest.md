# DeleteWorkspaceTokenRequest

## Example Usage

```typescript
import { DeleteWorkspaceTokenRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: DeleteWorkspaceTokenRequest = {
  tokenID: "<id>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `workspaceId`                       | *string*                            | :heavy_minus_sign:                  | Unique identifier of the workspace. |
| `tokenID`                           | *string*                            | :heavy_check_mark:                  | Unique identifier of the token.     |