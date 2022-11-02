import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class RevokeEmbedAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenID" })
  TokenId: string;
  
}

export class RevokeEmbedAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: RevokeEmbedAccessTokenPathParams;
  
}

export class RevokeEmbedAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  StatusCode: number;
  
}



