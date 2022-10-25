import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetApisOp {
  @Metadata("queryParam, name=and")
  And: boolean;
}

export class GetApisQueryParams {
  @Metadata("queryParam, style=deepObject;explode=true;name=metadata")
  Metadata?: Map<string, string[]>;
  @Metadata("queryParam, style=deepObject;explode=true;name=op")
  Op?: GetApisOp;
}

export class GetApisRequest {
  QueryParams: GetApisQueryParams;
}

export class GetApisResponse {
  Apis?: shared.Api[];

  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
