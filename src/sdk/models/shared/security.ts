import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class SchemeApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=x-api-key" })
  ApiKey: string;
  
}

export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  ApiKey: SchemeApiKey;
  
}



