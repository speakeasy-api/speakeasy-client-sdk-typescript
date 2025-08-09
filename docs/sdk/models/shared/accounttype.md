# AccountType

## Example Usage

```typescript
import { AccountType } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: AccountType = "enterprise";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"free" | "scale-up" | "business" | "oss" | "enterprise" | Unrecognized<string>
```