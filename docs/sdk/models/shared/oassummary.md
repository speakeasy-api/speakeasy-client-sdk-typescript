# OASSummary

## Example Usage

```typescript
import { OASSummary } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: OASSummary = {
  info: {
    description: "afore octave wombat though fuss um",
    license: {},
    summary: "<value>",
    title: "<value>",
    version: "<value>",
  },
  operations: [
    {
      description:
        "furthermore jaggedly hence runny knavishly egg keenly grave incidentally righteously",
      method: "<value>",
      operationId: "<id>",
      path: "/usr/share",
      tags: [
        "<value>",
      ],
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `info`                                                              | [shared.OASInfo](../../../sdk/models/shared/oasinfo.md)             | :heavy_check_mark:                                                  | N/A                                                                 |
| `operations`                                                        | [shared.OASOperation](../../../sdk/models/shared/oasoperation.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |