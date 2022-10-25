import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteSchemaPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=revisionID")
  RevisionId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class DeleteSchemaRequest {
  PathParams: DeleteSchemaPathParams;
}

export class DeleteSchemaResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
