import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class UpsertApiEndpointPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiEndpointID")
  ApiEndpointId: string;
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class UpsertApiEndpointRequest {
  PathParams: UpsertApiEndpointPathParams;
  @Metadata("request, media_type=application/json")
  Request: shared.ApiEndpoint;
}

export class UpsertApiEndpointResponse {
  ApiEndpoint?: shared.ApiEndpoint;

  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
