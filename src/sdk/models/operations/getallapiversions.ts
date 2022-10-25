import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllApiVersionsPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
}

export class GetAllApiVersionsOp {
  @Metadata("queryParam, name=and")
  And: boolean;
}

export class GetAllApiVersionsQueryParams {
  @Metadata("queryParam, style=deepObject;explode=true;name=metadata")
  Metadata?: Map<string, string[]>;
  @Metadata("queryParam, style=deepObject;explode=true;name=op")
  Op?: GetAllApiVersionsOp;
}

export class GetAllApiVersionsRequest {
  PathParams: GetAllApiVersionsPathParams;

  QueryParams: GetAllApiVersionsQueryParams;
}

export class GetAllApiVersionsResponse {
  Apis?: shared.Api[];

  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
