# SuggestItemsRequestBody

## Example Usage

```typescript
import { SuggestItemsRequestBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: SuggestItemsRequestBody = {
  items: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  prompt: "<value>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                 | *string*[]                                                                                              | :heavy_check_mark:                                                                                      | The list of "things" to get suggestions for. One suggestion will be returned for each item in the list. |
| `prompt`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | The prompt to use for the suggestion. Think of this as the "preamble".                                  |