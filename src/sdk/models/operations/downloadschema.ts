import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DownloadSchemaPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;

  constructor(ApiId: string, VersionId: string) {
    this.ApiId = ApiId;
    this.VersionId = VersionId;
  }
}

export class DownloadSchemaRequest {
  PathParams: DownloadSchemaPathParams;

  constructor(PathParams: DownloadSchemaPathParams) {
    this.PathParams = PathParams;
  }
}

export class DownloadSchemaResponse {
  ContentType: string;

  Error?: shared.Error;

  Schema?: string;

  StatusCode: number;

  constructor(
    ContentType: string,
    StatusCode: number,
    Error?: shared.Error,
    Schema?: string
  ) {
    this.ContentType = ContentType;
    this.Error = Error;
    this.Schema = Schema;
    this.StatusCode = StatusCode;
  }
}
