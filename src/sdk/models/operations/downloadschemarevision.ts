import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DownloadSchemaRevisionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=revisionID" })
  RevisionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class DownloadSchemaRevisionRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: DownloadSchemaRevisionPathParams;
}

export class DownloadSchemaRevisionResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  Schema?: string;

  @Metadata()
  StatusCode: number;
}
