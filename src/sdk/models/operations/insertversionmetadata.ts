import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class InsertVersionMetadataPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class InsertVersionMetadataRequest {
  PathParams: InsertVersionMetadataPathParams;
  @Metadata("request, media_type=application/json")
  Request: shared.VersionMetadata;
}

export class InsertVersionMetadataResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;

  VersionMetadata?: shared.VersionMetadata;
}
