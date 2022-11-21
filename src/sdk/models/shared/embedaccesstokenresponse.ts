import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmbedAccessTokenResponse
/** 
 * An EmbedAccessTokenResponse contains a token that can be used to embed a Speakeasy dashboard.
**/
export class EmbedAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;
}
