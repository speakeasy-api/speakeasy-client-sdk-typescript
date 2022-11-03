import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DownloadSchemaRevisionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=revisionID" })
  revisionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}

export class DownloadSchemaRevisionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadSchemaRevisionPathParams;
}

export class DownloadSchemaRevisionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  schema?: string;

  @Metadata()
  statusCode: number;
}
