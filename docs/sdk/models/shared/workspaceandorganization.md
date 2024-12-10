# WorkspaceAndOrganization

A workspace and organization

## Example Usage

```typescript
import { WorkspaceAndOrganization } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: WorkspaceAndOrganization = {
  organization: {
    accountType: "enterprise",
    createdAt: new Date("2023-03-15T04:23:01.364Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    ssoActivated: false,
    telemetryDisabled: false,
    updatedAt: new Date("2023-02-21T20:20:12.003Z"),
  },
  workspace: {
    createdAt: new Date("2022-06-11T23:57:33.954Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2024-01-21T16:30:55.711Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `organization`                                                    | [shared.Organization](../../../sdk/models/shared/organization.md) | :heavy_check_mark:                                                | A speakeasy organization                                          |
| `workspace`                                                       | [shared.Workspace](../../../sdk/models/shared/workspace.md)       | :heavy_check_mark:                                                | A speakeasy workspace                                             |