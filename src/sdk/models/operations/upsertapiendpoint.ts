import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class UpsertApiEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionID: string;
}

export class UpsertApiEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpsertApiEndpointPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ApiEndpointInput;
}

export class UpsertApiEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiEndpoint?: shared.ApiEndpoint;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}