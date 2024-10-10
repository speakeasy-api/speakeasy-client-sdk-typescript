# PostTagsRequest

## Example Usage

```typescript
import { PostTagsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: PostTagsRequest = {
  namespaceName: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `namespaceName`                                         | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `addTags`                                               | [shared.AddTags](../../../sdk/models/shared/addtags.md) | :heavy_minus_sign:                                      | A JSON representation of the tags to add                |