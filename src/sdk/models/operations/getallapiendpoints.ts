import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllApiEndpointsPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
}

export class GetAllApiEndpointsRequest {
  PathParams: GetAllApiEndpointsPathParams;
}

export class GetAllApiEndpointsResponse {
  ApiEndpoints?: shared.ApiEndpoint[];

  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
