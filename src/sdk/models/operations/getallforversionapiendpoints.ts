import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllForVersionApiEndpointsPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
    constructor(ApiId: string, VersionId: string) {
		this.ApiId = ApiId;
		this.VersionId = VersionId;
	}
}

export class GetAllForVersionApiEndpointsRequest {
    
    PathParams: GetAllForVersionApiEndpointsPathParams;
    
    constructor(PathParams: GetAllForVersionApiEndpointsPathParams) {
		this.PathParams = PathParams;
	}
}

export class GetAllForVersionApiEndpointsResponse {
    
    ApiEndpoints?: shared.ApiEndpoint[];
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, ApiEndpoints?: shared.ApiEndpoint[], Error?: shared.Error) {
		this.ApiEndpoints = ApiEndpoints;
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



