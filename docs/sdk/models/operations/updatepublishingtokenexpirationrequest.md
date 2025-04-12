# UpdatePublishingTokenExpirationRequest

## Example Usage

```typescript
import { UpdatePublishingTokenExpirationRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpdatePublishingTokenExpirationRequest = {
  tokenID: "<id>",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `tokenID`                                                                                                                             | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Unique identifier of the publishing token.                                                                                            |
| `requestBody`                                                                                                                         | [operations.UpdatePublishingTokenExpirationRequestBody](../../../sdk/models/operations/updatepublishingtokenexpirationrequestbody.md) | :heavy_minus_sign:                                                                                                                    | The publishing token to update                                                                                                        |