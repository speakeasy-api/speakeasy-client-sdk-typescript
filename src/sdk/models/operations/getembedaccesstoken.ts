import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetEmbedAccessTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  Description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=duration" })
  Duration?: number;

  @Metadata({ data: "queryParam, serialization=json;name=filters" })
  Filters?: shared.Filters;
}

export class GetEmbedAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  QueryParams: GetEmbedAccessTokenQueryParams;
}

export class GetEmbedAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;

  @Metadata()
  EmbedAccessTokenResponse?: shared.EmbedAccessTokenResponse;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  StatusCode: number;
}
