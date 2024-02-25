# GetWorkspaceEventsResponse


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `cliEventBatch`                                             | [shared.CliEvent](../../../sdk/models/shared/clievent.md)[] | :heavy_minus_sign:                                          | Success                                                     |
| `contentType`                                               | *string*                                                    | :heavy_check_mark:                                          | HTTP response content type for this operation               |
| `error`                                                     | [shared.ErrorT](../../../sdk/models/shared/errort.md)       | :heavy_minus_sign:                                          | Error                                                       |
| `statusCode`                                                | *number*                                                    | :heavy_check_mark:                                          | HTTP response status code for this operation                |
| `rawResponse`                                               | [AxiosResponse](https://axios-http.com/docs/res_schema)     | :heavy_check_mark:                                          | Raw HTTP response; suitable for custom response parsing     |