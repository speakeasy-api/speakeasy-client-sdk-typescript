import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class FindApiEndpointPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=displayName")
    DisplayName: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
    constructor(ApiId: string, DisplayName: string, VersionId: string) {
		this.ApiId = ApiId;
		this.DisplayName = DisplayName;
		this.VersionId = VersionId;
	}
}

export class FindApiEndpointRequest {
    
    PathParams: FindApiEndpointPathParams;
    
    constructor(PathParams: FindApiEndpointPathParams) {
		this.PathParams = PathParams;
	}
}

export class FindApiEndpointResponse {
    
    ApiEndpoint?: shared.ApiEndpoint;
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, ApiEndpoint?: shared.ApiEndpoint, Error?: shared.Error) {
		this.ApiEndpoint = ApiEndpoint;
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



