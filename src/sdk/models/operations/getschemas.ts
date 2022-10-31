import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemasPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
    constructor(ApiId: string, VersionId: string) {
		this.ApiId = ApiId;
		this.VersionId = VersionId;
	}
}

export class GetSchemasRequest {
    
    PathParams: GetSchemasPathParams;
    
    constructor(PathParams: GetSchemasPathParams) {
		this.PathParams = PathParams;
	}
}

export class GetSchemasResponse {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    Schemata?: shared.Schema[];
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, Error?: shared.Error, Schemata?: shared.Schema[]) {
		this.ContentType = ContentType;
		this.Error = Error;
		this.Schemata = Schemata;
		this.StatusCode = StatusCode;
	}
}



