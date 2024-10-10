# GetWorkspaceByContextResponse


## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 417,
};
```

### `shared.WorkspaceAndOrganization`

```typescript
const value: shared.WorkspaceAndOrganization = {
  organization: {
    accountType: "enterprise",
    createdAt: new Date("2024-07-04T20:50:00.142Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    telemetryDisabled: false,
    updatedAt: new Date("2023-06-14T20:54:19.756Z"),
  },
  workspace: {
    createdAt: new Date("2024-08-23T18:46:32.755Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    telemetryDisabled: false,
    updatedAt: new Date("2024-10-01T09:29:08.367Z"),
    verified: false,
  },
};
```

