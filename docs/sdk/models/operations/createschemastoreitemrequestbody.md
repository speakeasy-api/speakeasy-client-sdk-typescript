# CreateSchemaStoreItemRequestBody

## Example Usage

```typescript
import { CreateSchemaStoreItemRequestBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: CreateSchemaStoreItemRequestBody = {
  format: "yaml",
  packageName: "<value>",
  sdkClassname: "<value>",
  spec: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `format`                                                       | [operations.Format](../../../sdk/models/operations/format.md)  | :heavy_check_mark:                                             | The format of the OpenAPI specification.                       |
| `packageName`                                                  | *string*                                                       | :heavy_check_mark:                                             | The package name to use in code snippets / quickstart.         |
| `sdkClassname`                                                 | *string*                                                       | :heavy_check_mark:                                             | The classname of the SDK to use in code snippets / quickstart. |
| `spec`                                                         | *string*                                                       | :heavy_check_mark:                                             | The OpenAPI specification to store.                            |