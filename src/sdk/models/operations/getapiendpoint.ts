import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetApiEndpointPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiEndpointID")
  ApiEndpointId: string;
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;

  constructor(ApiEndpointId: string, ApiId: string, VersionId: string) {
    this.ApiEndpointId = ApiEndpointId;
    this.ApiId = ApiId;
    this.VersionId = VersionId;
  }
}

export class GetApiEndpointRequest {
  PathParams: GetApiEndpointPathParams;

  constructor(PathParams: GetApiEndpointPathParams) {
    this.PathParams = PathParams;
  }
}

export class GetApiEndpointResponse {
  ApiEndpoint?: shared.ApiEndpoint;

  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;

  constructor(
    ContentType: string,
    StatusCode: number,
    ApiEndpoint?: shared.ApiEndpoint,
    Error?: shared.Error
  ) {
    this.ApiEndpoint = ApiEndpoint;
    this.ContentType = ContentType;
    this.Error = Error;
    this.StatusCode = StatusCode;
  }
}
