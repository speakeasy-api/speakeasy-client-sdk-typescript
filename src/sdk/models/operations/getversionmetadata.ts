import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetVersionMetadataPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class GetVersionMetadataRequest {
  PathParams: GetVersionMetadataPathParams;
}

export class GetVersionMetadataResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;

  VersionMetadata?: shared.VersionMetadata[];
}
