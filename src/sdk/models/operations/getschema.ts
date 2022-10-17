import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemaPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;

  constructor(ApiId: string, VersionId: string) {
    this.ApiId = ApiId;
    this.VersionId = VersionId;
  }
}

export class GetSchemaRequest {
  PathParams: GetSchemaPathParams;

  constructor(PathParams: GetSchemaPathParams) {
    this.PathParams = PathParams;
  }
}

export class GetSchemaResponse {
  ContentType: string;

  Error?: shared.Error;

  Schema?: shared.Schema;

  StatusCode: number;

  constructor(
    ContentType: string,
    StatusCode: number,
    Error?: shared.Error,
    Schema?: shared.Schema
  ) {
    this.ContentType = ContentType;
    this.Error = Error;
    this.Schema = Schema;
    this.StatusCode = StatusCode;
  }
}
