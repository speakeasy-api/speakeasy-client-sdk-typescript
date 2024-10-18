# WorkspaceAndOrganization

A workspace and organization

## Example Usage

```typescript
import { WorkspaceAndOrganization } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: WorkspaceAndOrganization = {
  organization: {
    accountType: "enterprise",
    createdAt: new Date("2022-07-11T10:12:51.010Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    telemetryDisabled: false,
    updatedAt: new Date("2022-12-26T11:23:46.953Z"),
  },
  workspace: {
    createdAt: new Date("2024-01-16T15:53:28.719Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2022-03-11T06:36:47.494Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `organization`                                                    | [shared.Organization](../../../sdk/models/shared/organization.md) | :heavy_check_mark:                                                | A speakeasy organization                                          |
| `workspace`                                                       | [shared.Workspace](../../../sdk/models/shared/workspace.md)       | :heavy_check_mark:                                                | A speakeasy workspace                                             |