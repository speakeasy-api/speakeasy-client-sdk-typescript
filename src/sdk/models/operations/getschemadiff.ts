import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemaDiffPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=baseRevisionID" })
  baseRevisionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=targetRevisionID" })
  targetRevisionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}

export class GetSchemaDiffRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchemaDiffPathParams;
}

export class GetSchemaDiffResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  schemaDiff?: shared.SchemaDiff;

  @Metadata()
  statusCode: number;
}
