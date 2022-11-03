import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}

export class DeleteApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiPathParams;
}

export class DeleteApiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
