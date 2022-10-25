import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class UpsertApiPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
}

export class UpsertApiRequest {
  PathParams: UpsertApiPathParams;
  @Metadata("request, media_type=application/json")
  Request: shared.Api;
}

export class UpsertApiResponse {
  Api?: shared.Api;

  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
