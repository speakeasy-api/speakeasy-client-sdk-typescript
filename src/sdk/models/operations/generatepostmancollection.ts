import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GeneratePostmanCollectionPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
    constructor(ApiId: string, VersionId: string) {
		this.ApiId = ApiId;
		this.VersionId = VersionId;
	}
}

export class GeneratePostmanCollectionRequest {
    
    PathParams: GeneratePostmanCollectionPathParams;
    
    constructor(PathParams: GeneratePostmanCollectionPathParams) {
		this.PathParams = PathParams;
	}
}

export class GeneratePostmanCollectionResponse {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    PostmanCollection?: string;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, Error?: Error, PostmanCollection?: string) {
		this.ContentType = ContentType;
		this.Error = Error;
		this.PostmanCollection = PostmanCollection;
		this.StatusCode = StatusCode;
	}
}



