import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GenerateRequestPostmanCollectionPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=requestID")
    RequestId: string;
    
    constructor(RequestId: string) {
		this.RequestId = RequestId;
	}
}

export class GenerateRequestPostmanCollectionRequest {
    
    PathParams: GenerateRequestPostmanCollectionPathParams;
    
    constructor(PathParams: GenerateRequestPostmanCollectionPathParams) {
		this.PathParams = PathParams;
	}
}

export class GenerateRequestPostmanCollectionResponse {
    
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



