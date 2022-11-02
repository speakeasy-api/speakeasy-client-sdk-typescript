import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class InsertVersionMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class InsertVersionMetadataRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: InsertVersionMetadataPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  Request: shared.VersionMetadata;
}

export class InsertVersionMetadataResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  StatusCode: number;

  @Metadata()
  VersionMetadata?: shared.VersionMetadata;
}
