import { Base, Model, Primed } from "primed-model";
import { Metadata } from "../../../internal/utils/utils";

@Model
export class SchemeApiKey extends Base<SchemeApiKey> {
  @Metadata("security, name=x-api-key")
  ApiKey: string;
}

@Model
export class Security extends Base<Security> {
  @Metadata("security, scheme=true;type=apiKey;subtype=header")
  @Primed(SchemeApiKey)
  ApiKey: SchemeApiKey;
}
