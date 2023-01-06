import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindApiEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionID: string;
}


export class FindApiEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindApiEndpointPathParams;
}


export class FindApiEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiEndpoint?: shared.ApiEndpoint;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
