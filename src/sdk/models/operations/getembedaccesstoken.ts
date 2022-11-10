import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";



export class GetEmbedAccessTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

  @Metadata({ data: "queryParam, serialization=json;name=filters" })
  filters?: shared.Filters;
}


export class GetEmbedAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEmbedAccessTokenQueryParams;
}


export class GetEmbedAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  embedAccessTokenResponse?: shared.EmbedAccessTokenResponse;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
