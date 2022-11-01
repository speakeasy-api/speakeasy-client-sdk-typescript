import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetRequestFromEventLogPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=requestID" })
  RequestId: string;
  
}

export class GetRequestFromEventLogRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GetRequestFromEventLogPathParams;
  
}

export class GetRequestFromEventLogResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  StatusCode: number;
  @Metadata()
  UnboundedRequest?: shared.UnboundedRequest;
  
}



