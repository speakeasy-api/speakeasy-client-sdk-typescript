# AccessToken

An AccessToken is a token that can be used to authenticate with the Speakeasy API.


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `accessToken`                                                           | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `claims`                                                                | [shared.Claims](../../../sdk/models/shared/claims.md)                   | :heavy_check_mark:                                                      | N/A                                                                     |
| `featureFlags`                                                          | [shared.FeatureFlag](../../../sdk/models/shared/featureflag.md)[]       | :heavy_minus_sign:                                                      | N/A                                                                     |
| `user`                                                                  | [shared.AccessTokenUser](../../../sdk/models/shared/accesstokenuser.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `workspaces`                                                            | [shared.Workspaces](../../../sdk/models/shared/workspaces.md)[]         | :heavy_minus_sign:                                                      | N/A                                                                     |