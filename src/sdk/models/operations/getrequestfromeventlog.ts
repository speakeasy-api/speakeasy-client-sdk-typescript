import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRequestFromEventLogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=requestID" })
  requestId: string;
}


export class GetRequestFromEventLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRequestFromEventLogPathParams;
}


export class GetRequestFromEventLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unboundedRequest?: shared.UnboundedRequest;
}
