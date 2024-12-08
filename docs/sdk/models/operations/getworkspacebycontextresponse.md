# GetWorkspaceByContextResponse


## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 501,
};
```

### `shared.WorkspaceAndOrganization`

```typescript
const value: shared.WorkspaceAndOrganization = {
  organization: {
    accountType: "scale-up",
    createdAt: new Date("2024-08-15T10:02:19.627Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    ssoActivated: false,
    telemetryDisabled: false,
    updatedAt: new Date("2023-06-24T02:43:59.746Z"),
  },
  workspace: {
    createdAt: new Date("2024-09-12T06:16:21.252Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2022-07-23T07:51:45.995Z"),
    verified: false,
  },
};
```

