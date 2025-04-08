# WorkspaceFeatureFlag

enum value workspace feature flag

## Example Usage

```typescript
import { WorkspaceFeatureFlag } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: WorkspaceFeatureFlag = "schema_registry";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"schema_registry" | "changes_report" | "skip_schema_registry" | "webhooks" | Unrecognized<string>
```