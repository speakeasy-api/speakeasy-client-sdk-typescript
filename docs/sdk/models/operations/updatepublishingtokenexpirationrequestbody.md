# UpdatePublishingTokenExpirationRequestBody

The publishing token to update

## Example Usage

```typescript
import { UpdatePublishingTokenExpirationRequestBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpdatePublishingTokenExpirationRequestBody = {
  validUntil: new Date("2024-10-04T07:15:30.008Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `validUntil`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The new expiration date for the publishing token.                                             |