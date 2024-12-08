# OASSummary

## Example Usage

```typescript
import { OASSummary } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: OASSummary = {
  info: {
    description: "over ouch beneath lumpy per firm table restfully",
    license: {},
    summary: "<value>",
    title: "<value>",
    version: "<value>",
  },
  operations: [
    {
      description:
        "needily wetly govern cleverly upon around glaring untrue suspension",
      method: "<value>",
      operationId: "<id>",
      path: "/dev",
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