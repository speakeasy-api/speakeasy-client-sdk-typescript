# Diagnostic

## Example Usage

```typescript
import { Diagnostic } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Diagnostic = {
  message: "<value>",
  path: [
    "/etc/mail",
  ],
  type: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `helpMessage`                         | *string*                              | :heavy_minus_sign:                    | Help message for how to fix the issue |
| `message`                             | *string*                              | :heavy_check_mark:                    | Message describing the issue          |
| `path`                                | *string*[]                            | :heavy_check_mark:                    | Schema path to the issue              |
| `type`                                | *string*                              | :heavy_check_mark:                    | Issue type                            |