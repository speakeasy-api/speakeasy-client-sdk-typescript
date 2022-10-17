import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetRequestFromEventLogPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=requestID")
  RequestId: string;

  constructor(RequestId: string) {
    this.RequestId = RequestId;
  }
}

export class GetRequestFromEventLogRequest {
  PathParams: GetRequestFromEventLogPathParams;

  constructor(PathParams: GetRequestFromEventLogPathParams) {
    this.PathParams = PathParams;
  }
}

export class GetRequestFromEventLogResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;

  UnboundedRequest?: shared.UnboundedRequest;

  constructor(
    ContentType: string,
    StatusCode: number,
    Error?: shared.Error,
    UnboundedRequest?: shared.UnboundedRequest
  ) {
    this.ContentType = ContentType;
    this.Error = Error;
    this.StatusCode = StatusCode;
    this.UnboundedRequest = UnboundedRequest;
  }
}
