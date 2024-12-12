# RemoteSource

Remote source configuration

## Example Usage

```typescript
import { RemoteSource } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: RemoteSource = {
  inputs: [
    {
      registryUrl: "https://tough-vol.org/",
    },
  ],
  output: {
    registryUrl: "https://sorrowful-finger.com",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `inputs`                                                                | [shared.RemoteDocument](../../../sdk/models/shared/remotedocument.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |
| `output`                                                                | [shared.RemoteDocument](../../../sdk/models/shared/remotedocument.md)   | :heavy_check_mark:                                                      | A document hosted in the registry                                       |
| `overlays`                                                              | [shared.RemoteDocument](../../../sdk/models/shared/remotedocument.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |