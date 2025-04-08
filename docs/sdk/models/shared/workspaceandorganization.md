# WorkspaceAndOrganization

A workspace and organization

## Example Usage

```typescript
import { WorkspaceAndOrganization } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: WorkspaceAndOrganization = {
  organization: {
    accountType: "business",
    createdAt: new Date("2023-06-23T09:04:56.583Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    ssoActivated: false,
    telemetryDisabled: false,
    updatedAt: new Date("2023-05-06T16:26:41.472Z"),
  },
  workspace: {
    createdAt: new Date("2025-08-27T07:37:11.693Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2023-04-29T03:38:38.048Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `organization`                                                    | [shared.Organization](../../../sdk/models/shared/organization.md) | :heavy_check_mark:                                                | A speakeasy organization                                          |
| `workspace`                                                       | [shared.Workspace](../../../sdk/models/shared/workspace.md)       | :heavy_check_mark:                                                | A speakeasy workspace                                             |