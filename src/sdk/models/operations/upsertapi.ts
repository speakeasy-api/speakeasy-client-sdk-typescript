import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class UpsertApiPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    
    constructor(ApiId: string) {
		this.ApiId = ApiId;
	}
}

export class UpsertApiRequest {
    
    PathParams: UpsertApiPathParams;
    @Metadata("request, media_type=application/json")
    Request: shared.Api;
    
    constructor(PathParams: UpsertApiPathParams, Request: Api) {
		this.PathParams = PathParams;
		this.Request = Request;
	}
}

export class UpsertApiResponse {
    
    Api?: shared.Api;
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, Api?: Api, Error?: Error) {
		this.Api = Api;
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



