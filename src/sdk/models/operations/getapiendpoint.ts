import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionID: string;
}


export class GetApiEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiEndpointPathParams;
}


export class GetApiEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiEndpoint?: shared.ApiEndpoint;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
