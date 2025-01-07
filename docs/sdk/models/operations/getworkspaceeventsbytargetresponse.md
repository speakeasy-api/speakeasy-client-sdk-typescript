# GetWorkspaceEventsByTargetResponse


## Supported Types

### `shared.CliEvent[]`

```typescript
const value: shared.CliEvent[] = [
  {
    createdAt: new Date("2024-02-01T23:01:15.623Z"),
    executionId: "<id>",
    id: "<id>",
    interactionType: "TOMBSTONE",
    localStartedAt: new Date("2024-02-19T13:21:39.892Z"),
    speakeasyApiKeyName: "<value>",
    speakeasyVersion: "<value>",
    success: false,
    workspaceId: "<id>",
  },
];
```

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 501,
};
```

