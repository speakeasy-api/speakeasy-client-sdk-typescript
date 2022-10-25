import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemaDiffPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=baseRevisionID")
  BaseRevisionId: string;
  @Metadata("pathParam, style=simple;explode=false;name=targetRevisionID")
  TargetRevisionId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class GetSchemaDiffRequest {
  PathParams: GetSchemaDiffPathParams;
}

export class GetSchemaDiffResponse {
  ContentType: string;

  Error?: shared.Error;

  SchemaDiff?: shared.SchemaDiff;

  StatusCode: number;
}
