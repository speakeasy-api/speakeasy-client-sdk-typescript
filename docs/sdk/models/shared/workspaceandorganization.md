# WorkspaceAndOrganization

A workspace and organization

## Example Usage

```typescript
import { WorkspaceAndOrganization } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: WorkspaceAndOrganization = {
  organization: {
    accountType: "scale-up",
    createdAt: new Date("2023-07-24T21:41:06.633Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    ssoActivated: false,
    telemetryDisabled: false,
    updatedAt: new Date("2023-05-11T04:19:54.493Z"),
  },
  workspace: {
    createdAt: new Date("2024-05-26T14:43:35.408Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2024-11-18T17:34:52.177Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `organization`                                                    | [shared.Organization](../../../sdk/models/shared/organization.md) | :heavy_check_mark:                                                | A speakeasy organization                                          |
| `workspace`                                                       | [shared.Workspace](../../../sdk/models/shared/workspace.md)       | :heavy_check_mark:                                                | A speakeasy workspace                                             |