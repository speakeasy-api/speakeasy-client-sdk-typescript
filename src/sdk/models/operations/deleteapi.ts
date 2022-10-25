import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteApiPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class DeleteApiRequest {
  PathParams: DeleteApiPathParams;
}

export class DeleteApiResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
