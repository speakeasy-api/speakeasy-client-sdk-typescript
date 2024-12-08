# QueryEventLogResponse


## Supported Types

### `shared.BoundedRequest[]`

```typescript
const value: shared.BoundedRequest[] = [
  {
    apiEndpointId: "<id>",
    apiId: "<id>",
    createdAt: new Date("2023-05-16T05:23:49.944Z"),
    customerId: "<id>",
    latency: 153369,
    method: "<value>",
    path: "/home",
    requestFinishTime: new Date("2023-04-20T13:12:59.623Z"),
    requestId: "<id>",
    requestStartTime: new Date("2023-08-02T22:40:10.134Z"),
    status: 349440,
    versionId: "<id>",
    workspaceId: "<id>",
  },
];
```

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 423,
};
```

