import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteApiEndpointPathParams {
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

export class DeleteApiEndpointRequest {
  PathParams: DeleteApiEndpointPathParams;

  constructor(PathParams: DeleteApiEndpointPathParams) {
    this.PathParams = PathParams;
  }
}

export class DeleteApiEndpointResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;

  constructor(ContentType: string, StatusCode: number, Error?: shared.Error) {
    this.ContentType = ContentType;
    this.Error = Error;
    this.StatusCode = StatusCode;
  }
}
