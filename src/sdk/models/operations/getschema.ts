import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemaPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class GetSchemaRequest {
  PathParams: GetSchemaPathParams;
}

export class GetSchemaResponse {
  ContentType: string;

  Error?: shared.Error;

  Schema?: shared.Schema;

  StatusCode: number;
}
