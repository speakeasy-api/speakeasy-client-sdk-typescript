import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetEmbedAccessTokenQueryParams {
  @Metadata("queryParam, style=form;explode=true;name=description")
  Description?: string;
  @Metadata("queryParam, style=form;explode=true;name=duration")
  Duration?: number;
  @Metadata("queryParam, serialization=json;name=filters")
  Filters?: shared.Filters;

  constructor(
    Description?: string,
    Duration?: number,
    Filters?: shared.Filters
  ) {
    this.Description = Description;
    this.Duration = Duration;
    this.Filters = Filters;
  }
}

export class GetEmbedAccessTokenRequest {
  QueryParams: GetEmbedAccessTokenQueryParams;

  constructor(QueryParams: GetEmbedAccessTokenQueryParams) {
    this.QueryParams = QueryParams;
  }
}

export class GetEmbedAccessTokenResponse {
  ContentType: string;

  EmbedAccessTokenResponse?: shared.EmbedAccessTokenResponse;

  Error?: shared.Error;

  StatusCode: number;

  constructor(
    ContentType: string,
    StatusCode: number,
    EmbedAccessTokenResponse?: shared.EmbedAccessTokenResponse,
    Error?: shared.Error
  ) {
    this.ContentType = ContentType;
    this.EmbedAccessTokenResponse = EmbedAccessTokenResponse;
    this.Error = Error;
    this.StatusCode = StatusCode;
  }
}
