import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InsertVersionMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionID: string;
}


export class InsertVersionMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsertVersionMetadataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.VersionMetadataInput;
}


export class InsertVersionMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  versionMetadata?: shared.VersionMetadata;
}
