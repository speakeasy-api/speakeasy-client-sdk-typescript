import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class InsertVersionMetadataPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
    constructor(ApiId: string, VersionId: string) {
		this.ApiId = ApiId;
		this.VersionId = VersionId;
	}
}

export class InsertVersionMetadataRequest {
    
    PathParams: InsertVersionMetadataPathParams;
    @Metadata("request, media_type=application/json")
    Request: shared.VersionMetadata;
    
    constructor(PathParams: InsertVersionMetadataPathParams, Request: shared.VersionMetadata) {
		this.PathParams = PathParams;
		this.Request = Request;
	}
}

export class InsertVersionMetadataResponse {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    VersionMetadata?: shared.VersionMetadata;
    
    constructor(ContentType: string, StatusCode: number, Error?: shared.Error, VersionMetadata?: shared.VersionMetadata) {
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
		this.VersionMetadata = VersionMetadata;
	}
}



