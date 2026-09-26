# TrialTargetsResponse

## Example Usage

```typescript
import { TrialTargetsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: TrialTargetsResponse = {
  availableTrials: null,
  usedTrials: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `availableTrials`                         | *string*[]                                | :heavy_check_mark:                        | Languages that can still get a free trial |
| `usedTrials`                              | *string*[]                                | :heavy_check_mark:                        | Languages that have already been trialed  |