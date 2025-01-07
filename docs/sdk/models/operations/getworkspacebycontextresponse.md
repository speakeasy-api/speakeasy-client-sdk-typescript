# GetWorkspaceByContextResponse


## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 201,
};
```

### `shared.WorkspaceAndOrganization`

```typescript
const value: shared.WorkspaceAndOrganization = {
  organization: {
    accountType: "business",
    createdAt: new Date("2025-02-01T00:22:56.047Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    ssoActivated: false,
    telemetryDisabled: false,
    updatedAt: new Date("2025-01-06T11:09:38.255Z"),
  },
  workspace: {
    createdAt: new Date("2025-11-05T22:50:25.041Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2023-01-03T23:06:19.217Z"),
    verified: false,
  },
};
```

