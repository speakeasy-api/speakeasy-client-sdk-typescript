import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteApiPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;

  constructor(ApiId: string, VersionId: string) {
    this.ApiId = ApiId;
    this.VersionId = VersionId;
  }
}

export class DeleteApiRequest {
  PathParams: DeleteApiPathParams;

  constructor(PathParams: DeleteApiPathParams) {
    this.PathParams = PathParams;
  }
}

export class DeleteApiResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;

  constructor(ContentType: string, StatusCode: number, Error?: shared.Error) {
    this.ContentType = ContentType;
    this.Error = Error;
    this.StatusCode = StatusCode;
  }
}
