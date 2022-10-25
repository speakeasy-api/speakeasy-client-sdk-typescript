import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DownloadSchemaPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class DownloadSchemaRequest {
  PathParams: DownloadSchemaPathParams;
}

export class DownloadSchemaResponse {
  ContentType: string;

  Error?: shared.Error;

  Schema?: string;

  StatusCode: number;
}
