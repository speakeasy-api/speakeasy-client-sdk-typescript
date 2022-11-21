import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadSchemaRevisionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionID" })
  revisionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class DownloadSchemaRevisionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadSchemaRevisionPathParams;
}


export class DownloadSchemaRevisionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  schema?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
