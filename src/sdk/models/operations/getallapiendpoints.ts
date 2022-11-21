import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllApiEndpointsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;
}


export class GetAllApiEndpointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllApiEndpointsPathParams;
}


export class GetAllApiEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ApiEndpoint })
  apiEndpoints?: shared.ApiEndpoint[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
