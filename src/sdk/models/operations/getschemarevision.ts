import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchemaRevisionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionID" })
  revisionID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionID: string;
}


export class GetSchemaRevisionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchemaRevisionPathParams;
}


export class GetSchemaRevisionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  schema?: shared.Schema;

  @SpeakeasyMetadata()
  statusCode: number;
}
