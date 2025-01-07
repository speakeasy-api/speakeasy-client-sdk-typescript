# GithubConfigureCodeSamplesResponse

A response to configure GitHub code samples

## Example Usage

```typescript
import { GithubConfigureCodeSamplesResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GithubConfigureCodeSamplesResponse = {
  codeSampleOverlayRegistryURL: "https://basic-piglet.net",
  source: {
    location: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `codeSampleOverlayRegistryURL`                                            | *string*                                                                  | :heavy_check_mark:                                                        | The URL of the code sample overlay registry                               |
| `ghActionID`                                                              | *string*                                                                  | :heavy_minus_sign:                                                        | The ID of the GitHub action that was dispatched                           |
| `source`                                                                  | [shared.WorkflowDocument](../../../sdk/models/shared/workflowdocument.md) | :heavy_check_mark:                                                        | A document referenced by a workflow                                       |