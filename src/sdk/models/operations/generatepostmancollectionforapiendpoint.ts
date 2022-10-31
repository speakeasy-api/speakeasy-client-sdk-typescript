import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GeneratePostmanCollectionForApiEndpointPathParams {
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

export class GeneratePostmanCollectionForApiEndpointRequest {
    
    PathParams: GeneratePostmanCollectionForApiEndpointPathParams;
    
    constructor(PathParams: GeneratePostmanCollectionForApiEndpointPathParams) {
		this.PathParams = PathParams;
	}
}

export class GeneratePostmanCollectionForApiEndpointResponse {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    PostmanCollection?: string;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, Error?: shared.Error, PostmanCollection?: string) {
		this.ContentType = ContentType;
		this.Error = Error;
		this.PostmanCollection = PostmanCollection;
		this.StatusCode = StatusCode;
	}
}



