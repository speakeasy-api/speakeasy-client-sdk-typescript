# Plugins
(*.plugins*)

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

(async() => {
  const sdk = new Speakeasy({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.plugins.getPlugins();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPluginsResponse](../../models/operations/getpluginsresponse.md)>**


## runPlugin

Run a plugin

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

(async() => {
  const sdk = new Speakeasy({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.plugins.runPlugin({
    filters: {
      filters: [
        {
          key: "<key>",
          operator: "string",
          value: "string",
        },
      ],
      limit: 669298,
      offset: 94585,
      operator: "string",
    },
    pluginID: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.RunPluginRequest](../../models/operations/runpluginrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.RunPluginResponse](../../models/operations/runpluginresponse.md)>**


## upsertPlugin

Upsert a plugin

### Example Usage

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

(async() => {
  const sdk = new Speakeasy({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.plugins.upsertPlugin({
    code: "string",
    pluginId: "string",
    title: "string",
    workspaceId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Plugin](../../models/shared/plugin.md)               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpsertPluginResponse](../../models/operations/upsertpluginresponse.md)>**

