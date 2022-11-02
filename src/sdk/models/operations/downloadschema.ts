import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DownloadSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class DownloadSchemaRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: DownloadSchemaPathParams;
}

export class DownloadSchemaResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  Schema?: string;

  @Metadata()
  StatusCode: number;
}
