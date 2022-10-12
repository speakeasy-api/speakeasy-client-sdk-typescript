import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DownloadSchemaRevisionPathParams {
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

export class DownloadSchemaRevisionRequest {
    
    PathParams: DownloadSchemaRevisionPathParams;
    
    constructor(PathParams: DownloadSchemaRevisionPathParams) {
		this.PathParams = PathParams;
	}
}

export class DownloadSchemaRevisionResponse {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    Schema?: string;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, Error?: Error, Schema?: string) {
		this.ContentType = ContentType;
		this.Error = Error;
		this.Schema = Schema;
		this.StatusCode = StatusCode;
	}
}



