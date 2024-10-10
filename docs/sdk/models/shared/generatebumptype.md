# GenerateBumpType

Bump type of the lock file (calculated semver delta, custom change (manual release), or prerelease/graduate)

## Example Usage

```typescript
import { GenerateBumpType } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GenerateBumpType = "major";
```

## Values

```typescript
"major" | "minor" | "patch" | "custom" | "graduate" | "prerelease" | "none"
```