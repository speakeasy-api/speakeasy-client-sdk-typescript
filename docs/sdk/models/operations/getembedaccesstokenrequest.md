# GetEmbedAccessTokenRequest

## Example Usage

```typescript
import { GetEmbedAccessTokenRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetEmbedAccessTokenRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `description`                                           | *string*                                                | :heavy_minus_sign:                                      | The description of the embed access token.              |
| `duration`                                              | *number*                                                | :heavy_minus_sign:                                      | The duration (in minutes) of the embed access token.    |
| `filters`                                               | [shared.Filters](../../../sdk/models/shared/filters.md) | :heavy_minus_sign:                                      | The filter to apply to the query.                       |