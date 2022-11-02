import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemaRevisionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=revisionID" })
  RevisionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class GetSchemaRevisionRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GetSchemaRevisionPathParams;
}

export class GetSchemaRevisionResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  Schema?: shared.Schema;

  @Metadata()
  StatusCode: number;
}
