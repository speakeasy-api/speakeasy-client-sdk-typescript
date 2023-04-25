# plugins

## Overview

REST APIs for managing and running plugins

### Available Operations

* [getPlugins](#getplugins) - Get all plugins for the current workspace.
* [runPlugin](#runplugin) - Run a plugin
* [upsertPlugin](#upsertplugin) - Upsert a plugin

## getPlugins

Get all plugins for the current workspace.

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { GetPluginsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.plugins.getPlugins().then((res: GetPluginsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## runPlugin

Run a plugin

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { RunPluginRequest, RunPluginResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: RunPluginRequest = {
  filters: {
    filters: [
      {
        key: "repellat",
        operator: "mollitia",
        value: "occaecati",
      },
    ],
    limit: 253291,
    offset: 414369,
    operator: "quam",
  },
  pluginID: "molestiae",
};

sdk.plugins.runPlugin(req).then((res: RunPluginResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## upsertPlugin

Upsert a plugin

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { Plugin, UpsertPluginResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Speakeasy({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: shared.Plugin = {
  code: "velit",
  createdAt: new Date("2022-09-06T22:51:09.401Z"),
  evalHash: "quis",
  pluginId: "vitae",
  title: "Miss",
  updatedAt: new Date("2022-05-14T10:37:30.872Z"),
  workspaceId: "odit",
};

sdk.plugins.upsertPlugin(req).then((res: UpsertPluginResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
