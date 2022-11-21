import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchemaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GetSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchemaPathParams;
}


export class GetSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  schema?: shared.Schema;

  @SpeakeasyMetadata()
  statusCode: number;
}
