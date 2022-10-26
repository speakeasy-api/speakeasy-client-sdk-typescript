import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GenerateOpenApiSpecPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;

  constructor(ApiId: string, VersionId: string) {
    this.ApiId = ApiId;
    this.VersionId = VersionId;
  }
}

export class GenerateOpenApiSpecRequest {
  PathParams: GenerateOpenApiSpecPathParams;

  constructor(PathParams: GenerateOpenApiSpecPathParams) {
    this.PathParams = PathParams;
  }
}

export class GenerateOpenApiSpecResponse {
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
