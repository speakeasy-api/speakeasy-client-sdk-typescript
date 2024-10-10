# Namespace

A namespace contains many revisions.

## Example Usage

```typescript
import { Namespace } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Namespace = {
  createdAt: new Date("2024-03-31T12:50:52.284Z"),
  id: "<id>",
  name: "<value>",
  updatedAt: new Date("2024-09-17T11:26:38.524Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | {organization_slug}/{workspace_slug}/{namespace_name}                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | A human-readable name for the namespace.                                                      |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |