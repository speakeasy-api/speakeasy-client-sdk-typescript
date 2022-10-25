import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemaRevisionPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=revisionID")
  RevisionId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class GetSchemaRevisionRequest {
  PathParams: GetSchemaRevisionPathParams;
}

export class GetSchemaRevisionResponse {
  ContentType: string;

  Error?: shared.Error;

  Schema?: shared.Schema;

  StatusCode: number;
}
