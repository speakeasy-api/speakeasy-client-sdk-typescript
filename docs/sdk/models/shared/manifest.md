# Manifest

Returns the requested manifest file

## Example Usage

```typescript
import { Manifest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Manifest = {
  layers: [
    {
      digest:
        "sha256:5d20c808ce198565ff70b3ed23a991dd49afac45dece63474b27ce6ed036adc6",
      mediaType: "application/vnd.docker.image.rootfs.diff.tar.gzip",
      size: 2107098,
    },
  ],
  mediaType: "application/vnd.docker.distribution.manifest.v2+json",
  schemaVersion: 2,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `annotations`                                                                                           | [shared.Annotations](../../../sdk/models/shared/annotations.md)                                         | :heavy_minus_sign:                                                                                      | Annotations                                                                                             |
| `artifactType`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Type of artifact                                                                                        |
| `layers`                                                                                                | [shared.V2Descriptor](../../../sdk/models/shared/v2descriptor.md)[]                                     | :heavy_minus_sign:                                                                                      | List of V2 image layer information                                                                      |
| `mediaType`                                                                                             | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Media type usually application/vnd.docker.distribution.manifest.v2+json if this is in the accept header |
| `schemaVersion`                                                                                         | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Schema version                                                                                          |