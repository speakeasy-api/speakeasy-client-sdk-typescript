import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllApiEndpointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;
}

export class GetAllApiEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllApiEndpointsPathParams;
}

export class GetAllApiEndpointsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ApiEndpoint })
  apiEndpoints?: shared.ApiEndpoint[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
