# ValueChange

## Example Usage

```typescript
import { ValueChange } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: ValueChange = {
  from: "<value>",
  to: "<value>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `from`                                        | *string*                                      | :heavy_check_mark:                            | Represents the previous value of the element. |
| `to`                                          | *string*                                      | :heavy_check_mark:                            | Represents the current value of the element.  |