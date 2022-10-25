import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class FindApiEndpointPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=displayName")
  DisplayName: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class FindApiEndpointRequest {
  PathParams: FindApiEndpointPathParams;
}

export class FindApiEndpointResponse {
  ApiEndpoint?: shared.ApiEndpoint;

  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
