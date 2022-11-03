import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteVersionMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=metaKey" })
  metaKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=metaValue" })
  metaValue: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}

export class DeleteVersionMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVersionMetadataPathParams;
}

export class DeleteVersionMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
