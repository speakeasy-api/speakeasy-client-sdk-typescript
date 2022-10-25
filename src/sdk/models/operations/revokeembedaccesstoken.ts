import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class RevokeEmbedAccessTokenPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=tokenID")
  TokenId: string;
}

export class RevokeEmbedAccessTokenRequest {
  PathParams: RevokeEmbedAccessTokenPathParams;
}

export class RevokeEmbedAccessTokenResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
