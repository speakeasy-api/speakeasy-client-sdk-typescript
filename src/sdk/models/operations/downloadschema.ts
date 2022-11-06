import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DownloadSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class DownloadSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadSchemaPathParams;
}


export class DownloadSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  schema?: string;

  @Metadata()
  statusCode: number;
}
