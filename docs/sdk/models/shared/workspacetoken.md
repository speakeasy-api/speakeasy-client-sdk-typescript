# WorkspaceToken

A workspace token

## Example Usage

```typescript
import { WorkspaceToken } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: WorkspaceToken = {
  alg: "<value>",
  createdAt: "<value>",
  id: "<id>",
  key: "<key>",
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `alg`              | *string*           | :heavy_check_mark: | N/A                |
| `createdAt`        | *string*           | :heavy_check_mark: | N/A                |
| `createdBy`        | *string*           | :heavy_minus_sign: | N/A                |
| `email`            | *string*           | :heavy_minus_sign: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `key`              | *string*           | :heavy_check_mark: | N/A                |
| `lastUsed`         | *string*           | :heavy_minus_sign: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `workspaceId`      | *string*           | :heavy_minus_sign: | N/A                |