import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemaRevisionPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=revisionID")
  RevisionId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;

  constructor(ApiId: string, RevisionId: string, VersionId: string) {
    this.ApiId = ApiId;
    this.RevisionId = RevisionId;
    this.VersionId = VersionId;
  }
}

export class GetSchemaRevisionRequest {
  PathParams: GetSchemaRevisionPathParams;

  constructor(PathParams: GetSchemaRevisionPathParams) {
    this.PathParams = PathParams;
  }
}

export class GetSchemaRevisionResponse {
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
