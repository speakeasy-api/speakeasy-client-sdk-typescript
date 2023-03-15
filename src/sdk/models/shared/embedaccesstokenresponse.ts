import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// EmbedAccessTokenResponse
/**
 * An EmbedAccessTokenResponse contains a token that can be used to embed a Speakeasy dashboard.
 **/
export class EmbedAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "access_token" })
  accessToken: string;
}
