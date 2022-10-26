import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllApiVersionsPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;

  constructor(ApiId: string) {
    this.ApiId = ApiId;
  }
}

export class GetAllApiVersionsOp {
  @Metadata("queryParam, name=and")
  And: boolean;

  constructor(And: boolean) {
    this.And = And;
  }
}

export class GetAllApiVersionsQueryParams {
  @Metadata("queryParam, style=deepObject;explode=true;name=metadata")
  Metadata?: Map<string, string[]>;
  @Metadata("queryParam, style=deepObject;explode=true;name=op")
  Op?: GetAllApiVersionsOp;

  constructor(Metadata?: Map<string, string[]>, Op?: GetAllApiVersionsOp) {
    this.Metadata = Metadata;
    this.Op = Op;
  }
}

export class GetAllApiVersionsRequest {
  PathParams: GetAllApiVersionsPathParams;

  QueryParams: GetAllApiVersionsQueryParams;

  constructor(
    PathParams: GetAllApiVersionsPathParams,
    QueryParams: GetAllApiVersionsQueryParams
  ) {
    this.PathParams = PathParams;
    this.QueryParams = QueryParams;
  }
}

export class GetAllApiVersionsResponse {
  Apis?: shared.Api[];

  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;

  constructor(
    ContentType: string,
    StatusCode: number,
    Apis?: shared.Api[],
    Error?: shared.Error
  ) {
    this.Apis = Apis;
    this.ContentType = ContentType;
    this.Error = Error;
    this.StatusCode = StatusCode;
  }
}
