import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetRequestFromEventLogPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=requestID")
  RequestId: string;
}

export class GetRequestFromEventLogRequest {
  PathParams: GetRequestFromEventLogPathParams;
}

export class GetRequestFromEventLogResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;

  UnboundedRequest?: shared.UnboundedRequest;
}
