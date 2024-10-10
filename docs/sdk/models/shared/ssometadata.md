# SSOMetadata

SSO metadata for a workspace

## Example Usage

```typescript
import { SSOMetadata } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: SSOMetadata = {
  ssoActivated: false,
  ssoDomains: [
    "<value>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ssoActivated`     | *boolean*          | :heavy_check_mark: | N/A                |
| `ssoDomains`       | *string*[]         | :heavy_check_mark: | N/A                |