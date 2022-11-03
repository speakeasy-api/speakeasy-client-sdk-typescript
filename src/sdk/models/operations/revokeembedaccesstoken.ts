import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class RevokeEmbedAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenID" })
  tokenId: string;
}

export class RevokeEmbedAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RevokeEmbedAccessTokenPathParams;
}

export class RevokeEmbedAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
