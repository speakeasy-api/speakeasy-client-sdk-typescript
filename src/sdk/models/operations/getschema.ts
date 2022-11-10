import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";



export class GetSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GetSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchemaPathParams;
}


export class GetSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  schema?: shared.Schema;

  @Metadata()
  statusCode: number;
}
