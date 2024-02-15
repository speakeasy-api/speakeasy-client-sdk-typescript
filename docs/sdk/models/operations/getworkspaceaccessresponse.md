# GetWorkspaceAccessResponse


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accessDetails`                                                     | [shared.AccessDetails](../../../sdk/models/shared/accessdetails.md) | :heavy_minus_sign:                                                  | OK                                                                  |
| `contentType`                                                       | *string*                                                            | :heavy_check_mark:                                                  | HTTP response content type for this operation                       |
| `error`                                                             | [shared.ErrorT](../../../sdk/models/shared/errort.md)               | :heavy_minus_sign:                                                  | N/A                                                                 |
| `statusCode`                                                        | *number*                                                            | :heavy_check_mark:                                                  | HTTP response status code for this operation                        |
| `rawResponse`                                                       | [AxiosResponse](https://axios-http.com/docs/res_schema)             | :heavy_check_mark:                                                  | Raw HTTP response; suitable for custom response parsing             |