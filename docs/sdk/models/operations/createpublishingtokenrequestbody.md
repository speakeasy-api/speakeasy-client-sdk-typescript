# CreatePublishingTokenRequestBody

The publishing token to create

## Example Usage

```typescript
import { CreatePublishingTokenRequestBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: CreatePublishingTokenRequestBody = {
  targetId: "<id>",
  targetResource: "<value>",
  tokenName: "<value>",
  validUntil: new Date("2023-10-12T16:59:12.606Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `targetId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetResource`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tokenName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `validUntil`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |