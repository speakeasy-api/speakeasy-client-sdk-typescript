import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class QueryEventLogQueryParams {
    @Metadata("queryParam, serialization=json;name=filters")
    Filters?: shared.Filters;
    
    constructor(Filters?: Filters) {
		this.Filters = Filters;
	}
}

export class QueryEventLogRequest {
    
    QueryParams: QueryEventLogQueryParams;
    
    constructor(QueryParams: QueryEventLogQueryParams) {
		this.QueryParams = QueryParams;
	}
}

export class QueryEventLogResponse {
    
    BoundedRequests?: shared.BoundedRequest[];
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, BoundedRequests?: shared.BoundedRequest[], Error?: Error) {
		this.BoundedRequests = BoundedRequests;
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



