import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DownloadSchemaRevisionPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=revisionID")
  RevisionId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class DownloadSchemaRevisionRequest {
  PathParams: DownloadSchemaRevisionPathParams;
}

export class DownloadSchemaRevisionResponse {
  ContentType: string;

  Error?: shared.Error;

  Schema?: string;

  StatusCode: number;
}
