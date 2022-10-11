import {Metadata} from "../../../internal/utils/utils";

export type GetRequestFromEventLogPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=requestID")
    RequestId: string;
    
}

export type GetRequestFromEventLogRequest = {
    
    PathParams: GetRequestFromEventLogPathParams;
    
}

export type GetRequestFromEventLogResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    UnboundedRequest?: shared.UnboundedRequest;
    
}



