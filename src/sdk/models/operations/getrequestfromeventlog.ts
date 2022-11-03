import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetRequestFromEventLogPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=requestID" })
  requestId: string;
}

export class GetRequestFromEventLogRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRequestFromEventLogPathParams;
}

export class GetRequestFromEventLogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  unboundedRequest?: shared.UnboundedRequest;
}
