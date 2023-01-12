import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpsertApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;
}


export class UpsertApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpsertApiPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ApiInput;
}


export class UpsertApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api?: shared.Api;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
