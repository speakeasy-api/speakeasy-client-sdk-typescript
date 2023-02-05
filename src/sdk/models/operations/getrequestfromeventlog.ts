import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetRequestFromEventLogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=requestID" })
  requestID: string;
}

export class GetRequestFromEventLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRequestFromEventLogPathParams;
}

export class GetRequestFromEventLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unboundedRequest?: shared.UnboundedRequest;
}