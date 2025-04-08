# GetWorkspaceByContextResponse


## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 101,
};
```

### `shared.WorkspaceAndOrganization`

```typescript
const value: shared.WorkspaceAndOrganization = {
  organization: {
    accountType: "free",
    createdAt: new Date("2023-04-05T20:24:21.250Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    ssoActivated: false,
    telemetryDisabled: false,
    updatedAt: new Date("2025-06-29T14:04:22.500Z"),
  },
  workspace: {
    createdAt: new Date("2025-04-28T04:14:14.464Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2023-01-28T11:26:04.678Z"),
    verified: false,
  },
};
```

