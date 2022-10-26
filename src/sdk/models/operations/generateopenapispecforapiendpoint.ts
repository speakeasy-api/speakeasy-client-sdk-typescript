import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GenerateOpenApiSpecForApiEndpointPathParams {
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

export class GenerateOpenApiSpecForApiEndpointRequest {
  PathParams: GenerateOpenApiSpecForApiEndpointPathParams;

  constructor(PathParams: GenerateOpenApiSpecForApiEndpointPathParams) {
    this.PathParams = PathParams;
  }
}

export class GenerateOpenApiSpecForApiEndpointResponse {
  ContentType: string;

  Error?: shared.Error;

  GenerateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;

  StatusCode: number;

  constructor(
    ContentType: string,
    StatusCode: number,
    Error?: shared.Error,
    GenerateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff
  ) {
    this.ContentType = ContentType;
    this.Error = Error;
    this.GenerateOpenApiSpecDiff = GenerateOpenApiSpecDiff;
    this.StatusCode = StatusCode;
  }
}
