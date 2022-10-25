import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllForVersionApiEndpointsPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class GetAllForVersionApiEndpointsRequest {
  PathParams: GetAllForVersionApiEndpointsPathParams;
}

export class GetAllForVersionApiEndpointsResponse {
  ApiEndpoints?: shared.ApiEndpoint[];

  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
