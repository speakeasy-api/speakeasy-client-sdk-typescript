import {Metadata} from "../../../internal/utils/utils";

export type QueryEventLogQueryParams = {
    @Metadata("queryParam, serialization=json;name=filters")
    Filters?: shared.Filters;
    
}

export type QueryEventLogRequest = {
    
    QueryParams: QueryEventLogQueryParams;
    
}

export type QueryEventLogResponse = {
    
    BoundedRequests?: shared.BoundedRequest[];
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



