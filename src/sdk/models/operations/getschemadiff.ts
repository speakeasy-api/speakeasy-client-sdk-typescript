import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchemaDiffPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=baseRevisionID" })
  baseRevisionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetRevisionID" })
  targetRevisionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GetSchemaDiffRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchemaDiffPathParams;
}


export class GetSchemaDiffResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  schemaDiff?: shared.SchemaDiff;

  @SpeakeasyMetadata()
  statusCode: number;
}
