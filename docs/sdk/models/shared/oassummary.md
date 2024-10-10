# OASSummary

## Example Usage

```typescript
import { OASSummary } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: OASSummary = {
  info: {
    description: "summer horde whoa once hence",
    license: {},
    summary: "<value>",
    title: "<value>",
    version: "<value>",
  },
  operations: [
    {
      description: "fuss um unit grade soap sizzling huzzah like",
      method: "<value>",
      operationId: "<id>",
      path: "/lost+found",
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