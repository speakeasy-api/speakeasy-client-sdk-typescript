import { Metadata } from "../../../internal/utils/utils";

export class SchemeApiKey {
  @Metadata("security, name=x-api-key")
  ApiKey: string;
}

export class Security {
  @Metadata("security, scheme=true;type=apiKey;subtype=header")
  ApiKey: SchemeApiKey;
}
