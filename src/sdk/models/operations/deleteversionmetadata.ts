import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVersionMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metaKey" })
  metaKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metaValue" })
  metaValue: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionID: string;
}


export class DeleteVersionMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVersionMetadataPathParams;
}


export class DeleteVersionMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
