# GetSchemaDiffResponse


## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 506,
};
```

### `shared.SchemaDiff`

```typescript
const value: shared.SchemaDiff = {
  additions: [
    "<value>",
  ],
  deletions: [
    "<value>",
  ],
  modifications: {
    "key": {
      from: "<value>",
      to: "<value>",
    },
  },
};
```

