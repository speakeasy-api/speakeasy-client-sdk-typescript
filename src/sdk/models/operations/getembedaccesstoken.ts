import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetEmbedAccessTokenQueryParams {
  @Metadata("queryParam, style=form;explode=true;name=description")
  Description?: string;
  @Metadata("queryParam, style=form;explode=true;name=duration")
  Duration?: number;
  @Metadata("queryParam, serialization=json;name=filters")
  Filters?: shared.Filters;
}

export class GetEmbedAccessTokenRequest {
  QueryParams: GetEmbedAccessTokenQueryParams;
}

export class GetEmbedAccessTokenResponse {
  ContentType: string;

  EmbedAccessTokenResponse?: shared.EmbedAccessTokenResponse;

  Error?: shared.Error;

  StatusCode: number;
}
