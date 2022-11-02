import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetVersionMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class GetVersionMetadataRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GetVersionMetadataPathParams;
}

export class GetVersionMetadataResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  StatusCode: number;

  @Metadata({ elemType: shared.VersionMetadata })
  VersionMetadata?: shared.VersionMetadata[];
}
