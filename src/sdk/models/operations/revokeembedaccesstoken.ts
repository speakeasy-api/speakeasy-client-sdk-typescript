import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RevokeEmbedAccessTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenID" })
  tokenId: string;
}


export class RevokeEmbedAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevokeEmbedAccessTokenPathParams;
}


export class RevokeEmbedAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
