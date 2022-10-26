# speakeasy-client-sdk-typescript

This is the Speakeasy API Client SDK for Typescript. It is generated from our OpenAPI spec found at https://docs.speakeasyapi.dev/openapi.yaml and used for interacting with the [Speakeasy API](https://docs.speakeasyapi.dev/docs/speakeasy-api/speakeasy-api).

This SDK was generated using Speakeasy's SDK Generator. For more information on how to use the generator to generate your own SDKs, please see the [Speakeasy Client SDK Generator Docs](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks).

## Installation

```bash
// Coming soon
npm i --save speakeasy-client-sdk-typescript
```

## Example usage
```typescript
// Replace relative paths below with npm module once it's published 
import {
    SDK,
    WithSecurity,
} from "../../speakeasy-client-sdk-typescript/src/sdk/sdk";
import {
    Security,
    SchemeApiKey,
} from "../../speakeasy-client-sdk-typescript/src/sdk/models/shared/security";
import {
    GetApisResponse,
    GetApisRequest,
    GetApisQueryParams,
    GetApisOp,
} from "../../speakeasy-client-sdk-typescript/src/sdk/models/operations";
import { AxiosError } from "axios";

const serverURL = "https://api.prod.speakeasyapi.dev";
const security: Security = new Security(new SchemeApiKey("YOUR_API_KEY")); // Replace with your API key from your Speakeasy Workspace
const sdk: SDK = new SDK(WithSecurity(serverURL, security));

const metadata: Map<string, string[]> = new Map([["label", ["1"]]]);
const op: GetApisOp = new GetApisOp(true);

const request: GetApisRequest = new GetApisRequest(
    new GetApisQueryParams(metadata, op)
);
sdk.GetApis(request).then((res: GetApisResponse | AxiosError) => {
    console.log(res);
});
```
