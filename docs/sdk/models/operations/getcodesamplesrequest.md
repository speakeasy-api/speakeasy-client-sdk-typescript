# GetCodeSamplesRequest

## Example Usage

```typescript
import { GetCodeSamplesRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetCodeSamplesRequest = {
  registryUrl: "https://buzzing-underneath.org",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `registryUrl`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The registry URL from which to retrieve the snippets. E.g. https://spec.speakeasy.com/org/ws/my-source |
| `operationIds`                                                                                         | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `languages`                                                                                            | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |