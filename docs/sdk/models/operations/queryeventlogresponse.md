# QueryEventLogResponse


## Supported Types

### `shared.BoundedRequest[]`

```typescript
const value: shared.BoundedRequest[] = [
  {
    apiEndpointId: "<id>",
    apiId: "<id>",
    createdAt: new Date("2024-05-27T16:12:22.860Z"),
    customerId: "<id>",
    latency: 548846,
    method: "<value>",
    path: "/private/tmp",
    requestFinishTime: new Date("2024-01-10T22:30:43.334Z"),
    requestId: "<id>",
    requestStartTime: new Date("2022-01-24T09:49:07.665Z"),
    status: 102316,
    versionId: "<id>",
    workspaceId: "<id>",
  },
];
```

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 226,
};
```

