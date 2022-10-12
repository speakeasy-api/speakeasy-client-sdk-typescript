import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteVersionMetadataPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=metaKey")
    MetaKey: string;
    @Metadata("pathParam, style=simple;explode=false;name=metaValue")
    MetaValue: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
    constructor(ApiId: string, MetaKey: string, MetaValue: string, VersionId: string) {
		this.ApiId = ApiId;
		this.MetaKey = MetaKey;
		this.MetaValue = MetaValue;
		this.VersionId = VersionId;
	}
}

export class DeleteVersionMetadataRequest {
    
    PathParams: DeleteVersionMetadataPathParams;
    
    constructor(PathParams: DeleteVersionMetadataPathParams) {
		this.PathParams = PathParams;
	}
}

export class DeleteVersionMetadataResponse {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, Error?: Error) {
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



