# GetWorkspaceByContextResponse


## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 424,
};
```

### `shared.WorkspaceAndOrganization`

```typescript
const value: shared.WorkspaceAndOrganization = {
  organization: {
    accountType: "enterprise",
    createdAt: new Date("2024-07-27T19:09:02.411Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    telemetryDisabled: false,
    updatedAt: new Date("2024-02-29T11:16:40.701Z"),
  },
  workspace: {
    createdAt: new Date("2024-12-08T23:54:11.569Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2024-09-12T02:41:54.847Z"),
    verified: false,
  },
};
```

