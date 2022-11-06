import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetValidEmbedAccessTokensResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.EmbedToken })
  embedTokens?: shared.EmbedToken[];

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
