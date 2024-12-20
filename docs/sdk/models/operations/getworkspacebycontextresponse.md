# GetWorkspaceByContextResponse


## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 502,
};
```

### `shared.WorkspaceAndOrganization`

```typescript
const value: shared.WorkspaceAndOrganization = {
  organization: {
    accountType: "business",
    createdAt: new Date("2022-10-16T14:25:54.471Z"),
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    ssoActivated: false,
    telemetryDisabled: false,
    updatedAt: new Date("2022-01-23T15:12:14.003Z"),
  },
  workspace: {
    createdAt: new Date("2024-04-11T04:23:31.598Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2022-12-17T17:43:52.087Z"),
    verified: false,
  },
};
```

