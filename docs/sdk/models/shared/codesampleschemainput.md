# CodeSampleSchemaInput

## Example Usage

```typescript
import { CodeSampleSchemaInput } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

// No examples available for this model
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `languages`                                                                                                                                                                                   | *string*[]                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                            | A list of languages to generate code samples for                                                                                                                                              |
| `schemaFile`                                                                                                                                                                                  | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [shared.SchemaFile](../../../sdk/models/shared/schemafile.md) | :heavy_check_mark:                                                                                                                                                                            | The OpenAPI file to be uploaded                                                                                                                                                               |
| `packageName`                                                                                                                                                                                 | *string*                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                            | The name of the package                                                                                                                                                                       |
| `sdkClassName`                                                                                                                                                                                | *string*                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                            | The SDK class name                                                                                                                                                                            |