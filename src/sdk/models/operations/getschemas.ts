import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}

export class GetSchemasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchemasPathParams;
}

export class GetSchemasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.Schema })
  schemata?: shared.Schema[];

  @Metadata()
  statusCode: number;
}
