import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteSchemaPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=revisionID")
    RevisionId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
    constructor(ApiId: string, RevisionId: string, VersionId: string) {
		this.ApiId = ApiId;
		this.RevisionId = RevisionId;
		this.VersionId = VersionId;
	}
}

export class DeleteSchemaRequest {
    
    PathParams: DeleteSchemaPathParams;
    
    constructor(PathParams: DeleteSchemaPathParams) {
		this.PathParams = PathParams;
	}
}

export class DeleteSchemaResponse {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, Error?: Error) {
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



