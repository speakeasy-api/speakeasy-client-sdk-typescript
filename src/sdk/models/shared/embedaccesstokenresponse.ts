import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class EmbedAccessTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  AccessToken: string;
  
}



