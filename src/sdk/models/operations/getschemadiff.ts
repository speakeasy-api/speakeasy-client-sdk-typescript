import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetSchemaDiffPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=baseRevisionID")
    BaseRevisionId: string;
    @Metadata("pathParam, style=simple;explode=false;name=targetRevisionID")
    TargetRevisionId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
    constructor(ApiId: string, BaseRevisionId: string, TargetRevisionId: string, VersionId: string) {
		this.ApiId = ApiId;
		this.BaseRevisionId = BaseRevisionId;
		this.TargetRevisionId = TargetRevisionId;
		this.VersionId = VersionId;
	}
}

export class GetSchemaDiffRequest {
    
    PathParams: GetSchemaDiffPathParams;
    
    constructor(PathParams: GetSchemaDiffPathParams) {
		this.PathParams = PathParams;
	}
}

export class GetSchemaDiffResponse {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    SchemaDiff?: shared.SchemaDiff;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, Error?: shared.Error, SchemaDiff?: shared.SchemaDiff) {
		this.ContentType = ContentType;
		this.Error = Error;
		this.SchemaDiff = SchemaDiff;
		this.StatusCode = StatusCode;
	}
}



