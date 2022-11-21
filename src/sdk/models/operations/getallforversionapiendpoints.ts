import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllForVersionApiEndpointsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GetAllForVersionApiEndpointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllForVersionApiEndpointsPathParams;
}


export class GetAllForVersionApiEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ApiEndpoint })
  apiEndpoints?: shared.ApiEndpoint[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
