# WorkspaceAndOrganization

A workspace and organization

## Example Usage

```typescript
import { WorkspaceAndOrganization } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: WorkspaceAndOrganization = {
  organization: {
    accountType: "free",
    createdAt: new Date("2023-04-09T04:55:05.565Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    ssoActivated: false,
    telemetryDisabled: false,
    updatedAt: new Date("2025-01-06T13:32:43.889Z"),
  },
  workspace: {
    createdAt: new Date("2023-09-26T22:08:20.716Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2024-04-05T21:52:12.474Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `organization`                                                    | [shared.Organization](../../../sdk/models/shared/organization.md) | :heavy_check_mark:                                                | A speakeasy organization                                          |
| `workspace`                                                       | [shared.Workspace](../../../sdk/models/shared/workspace.md)       | :heavy_check_mark:                                                | A speakeasy workspace                                             |