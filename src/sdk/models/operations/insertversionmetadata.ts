import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class InsertVersionMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}

export class InsertVersionMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InsertVersionMetadataPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.VersionMetadata;
}

export class InsertVersionMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  versionMetadata?: shared.VersionMetadata;
}
