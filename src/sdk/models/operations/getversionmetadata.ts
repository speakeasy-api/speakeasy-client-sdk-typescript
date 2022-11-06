import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVersionMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GetVersionMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVersionMetadataPathParams;
}


export class GetVersionMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.VersionMetadata })
  versionMetadata?: shared.VersionMetadata[];
}
