import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteVersionMetadataPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=metaKey")
  MetaKey: string;
  @Metadata("pathParam, style=simple;explode=false;name=metaValue")
  MetaValue: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class DeleteVersionMetadataRequest {
  PathParams: DeleteVersionMetadataPathParams;
}

export class DeleteVersionMetadataResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
