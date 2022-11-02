import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class GetSchemasRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GetSchemasPathParams;
}

export class GetSchemasResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata({ elemType: shared.Schema })
  Schemata?: shared.Schema[];

  @Metadata()
  StatusCode: number;
}
