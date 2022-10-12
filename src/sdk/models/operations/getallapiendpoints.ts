import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllApiEndpointsPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    
    constructor(ApiId: string) {
		this.ApiId = ApiId;
	}
}

export class GetAllApiEndpointsRequest {
    
    PathParams: GetAllApiEndpointsPathParams;
    
    constructor(PathParams: GetAllApiEndpointsPathParams) {
		this.PathParams = PathParams;
	}
}

export class GetAllApiEndpointsResponse {
    
    ApiEndpoints?: shared.ApiEndpoint[];
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, ApiEndpoints?: shared.ApiEndpoint[], Error?: Error) {
		this.ApiEndpoints = ApiEndpoints;
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



