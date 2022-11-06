import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpsertApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;
}


export class UpsertApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpsertApiPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Api;
}


export class UpsertApiResponse extends SpeakeasyBase {
  @Metadata()
  api?: shared.Api;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
