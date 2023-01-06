import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVersionMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionID: string;
}


export class GetVersionMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVersionMetadataPathParams;
}


export class GetVersionMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.VersionMetadata })
  versionMetadata?: shared.VersionMetadata[];
}
