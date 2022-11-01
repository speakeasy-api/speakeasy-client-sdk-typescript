import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetValidEmbedAccessTokensResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;
  @Metadata({ elemType: shared.EmbedToken })
  EmbedTokens?: shared.EmbedToken[];
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  StatusCode: number;
  
}



