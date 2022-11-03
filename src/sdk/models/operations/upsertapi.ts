import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class UpsertApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;
}

export class UpsertApiRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: UpsertApiPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  Request: shared.Api;
}

export class UpsertApiResponse extends SpeakeasyBase {
  @Metadata()
  Api?: shared.Api;

  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  StatusCode: number;
}
