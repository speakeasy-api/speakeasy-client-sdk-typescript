# GithubStorePublishingSecretsRequest

A request to store publishing secrets for a github target


## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `generateGenLockId`                            | *string*                                       | :heavy_check_mark:                             | The generation lock ID                         |
| `secrets`                                      | Record<string, *string*>                       | :heavy_minus_sign:                             | A map of secrets to store in the GitHub target |