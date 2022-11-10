import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";



export class GetSchemaRevisionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=revisionID" })
  revisionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GetSchemaRevisionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchemaRevisionPathParams;
}


export class GetSchemaRevisionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  schema?: shared.Schema;

  @Metadata()
  statusCode: number;
}
