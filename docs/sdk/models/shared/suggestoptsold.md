# SuggestOptsOld

## Example Usage

```typescript
import { SuggestOptsOld } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: SuggestOptsOld = {
  suggestionType: "diagnostics-only",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `diagnostics`                                                         | [shared.Diagnostic](../../../sdk/models/shared/diagnostic.md)[]       | :heavy_minus_sign:                                                    | N/A                                                                   |
| `suggestionType`                                                      | [shared.SuggestionType](../../../sdk/models/shared/suggestiontype.md) | :heavy_check_mark:                                                    | N/A                                                                   |