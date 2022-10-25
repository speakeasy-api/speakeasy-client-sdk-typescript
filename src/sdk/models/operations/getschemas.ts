import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemasPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class GetSchemasRequest {
  PathParams: GetSchemasPathParams;
}

export class GetSchemasResponse {
  ContentType: string;

  Error?: shared.Error;

  Schemata?: shared.Schema[];

  StatusCode: number;
}
