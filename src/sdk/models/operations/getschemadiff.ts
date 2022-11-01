import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemaDiffPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=baseRevisionID" })
  BaseRevisionId: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=targetRevisionID" })
  TargetRevisionId: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
  
}

export class GetSchemaDiffRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GetSchemaDiffPathParams;
  
}

export class GetSchemaDiffResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  SchemaDiff?: shared.SchemaDiff;
  @Metadata()
  StatusCode: number;
  
}



