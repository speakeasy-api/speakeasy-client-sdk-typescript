# RelativeDiff

A relative diff between the current revision and the previous revision.

## Example Usage

```typescript
import { RelativeDiff } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: RelativeDiff = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `addedLines`                                              | *number*                                                  | :heavy_minus_sign:                                        | The number of lines added against the previous revision   |
| `removedLines`                                            | *number*                                                  | :heavy_minus_sign:                                        | The number of lines removed against the previous revision |