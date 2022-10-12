import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class UpsertApiEndpointPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiEndpointID")
    ApiEndpointId: string;
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
    constructor(ApiEndpointId: string, ApiId: string, VersionId: string) {
		this.ApiEndpointId = ApiEndpointId;
		this.ApiId = ApiId;
		this.VersionId = VersionId;
	}
}

export class UpsertApiEndpointRequest {
    
    PathParams: UpsertApiEndpointPathParams;
    @Metadata("request, media_type=application/json")
    Request: shared.ApiEndpoint;
    
    constructor(PathParams: UpsertApiEndpointPathParams, Request: ApiEndpoint) {
		this.PathParams = PathParams;
		this.Request = Request;
	}
}

export class UpsertApiEndpointResponse {
    
    ApiEndpoint?: shared.ApiEndpoint;
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, ApiEndpoint?: ApiEndpoint, Error?: Error) {
		this.ApiEndpoint = ApiEndpoint;
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



