import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetVersionMetadataPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;

  constructor(ApiId: string, VersionId: string) {
    this.ApiId = ApiId;
    this.VersionId = VersionId;
  }
}

export class GetVersionMetadataRequest {
  PathParams: GetVersionMetadataPathParams;

  constructor(PathParams: GetVersionMetadataPathParams) {
    this.PathParams = PathParams;
  }
}

export class GetVersionMetadataResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;

  VersionMetadata?: shared.VersionMetadata[];

  constructor(
    ContentType: string,
    StatusCode: number,
    Error?: shared.Error,
    VersionMetadata?: shared.VersionMetadata[]
  ) {
    this.ContentType = ContentType;
    this.Error = Error;
    this.StatusCode = StatusCode;
    this.VersionMetadata = VersionMetadata;
  }
}
