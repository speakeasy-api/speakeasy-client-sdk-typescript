# GetManifestRequest

## Example Usage

```typescript
import { GetManifestRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetManifestRequest = {
  organizationSlug: "<value>",
  workspaceSlug: "<value>",
  namespaceName: "<value>",
  revisionReference: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `organizationSlug`  | *string*            | :heavy_check_mark:  | N/A                 |
| `workspaceSlug`     | *string*            | :heavy_check_mark:  | N/A                 |
| `namespaceName`     | *string*            | :heavy_check_mark:  | N/A                 |
| `revisionReference` | *string*            | :heavy_check_mark:  | Tag or digest       |