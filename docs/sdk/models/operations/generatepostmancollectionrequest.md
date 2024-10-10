# GeneratePostmanCollectionRequest

## Example Usage

```typescript
import { GeneratePostmanCollectionRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GeneratePostmanCollectionRequest = {
  apiID: "<id>",
  versionID: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `apiID`                                                         | *string*                                                        | :heavy_check_mark:                                              | The ID of the Api to generate a Postman collection for.         |
| `versionID`                                                     | *string*                                                        | :heavy_check_mark:                                              | The version ID of the Api to generate a Postman collection for. |