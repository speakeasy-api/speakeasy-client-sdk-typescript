import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetApisOp {
  @Metadata("queryParam, name=and")
  And: boolean;

  constructor(And: boolean) {
    this.And = And;
  }
}

export class GetApisQueryParams {
  @Metadata("queryParam, style=deepObject;explode=true;name=metadata")
  Metadata?: Map<string, string[]>;
  @Metadata("queryParam, style=deepObject;explode=true;name=op")
  Op?: GetApisOp;

  constructor(Metadata?: Map<string, string[]>, Op?: GetApisOp) {
    this.Metadata = Metadata;
    this.Op = Op;
  }
}

export class GetApisRequest {
  QueryParams?: GetApisQueryParams;

  constructor(QueryParams?: GetApisQueryParams) {
    this.QueryParams = QueryParams;
  }
}

export class GetApisResponse {
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
