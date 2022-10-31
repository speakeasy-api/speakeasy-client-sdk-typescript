import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class RegisterSchemaPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
    constructor(ApiId: string, VersionId: string) {
		this.ApiId = ApiId;
		this.VersionId = VersionId;
	}
}

export class RegisterSchemaRequestBodyFile {
    @Metadata("multipart_form, content=true")
    Content: string;
    @Metadata("multipart_form, name=file")
    File: string;
    
    constructor(Content: string, File: string) {
		this.Content = Content;
		this.File = File;
	}
}

export class RegisterSchemaRequestBody {
    @Metadata("multipart_form, file=true")
    File: RegisterSchemaRequestBodyFile;
    
    constructor(File: RegisterSchemaRequestBodyFile) {
		this.File = File;
	}
}

export class RegisterSchemaRequest {
    
    PathParams: RegisterSchemaPathParams;
    @Metadata("request, media_type=multipart/form-data")
    Request: RegisterSchemaRequestBody;
    
    constructor(PathParams: RegisterSchemaPathParams, Request: RegisterSchemaRequestBody) {
		this.PathParams = PathParams;
		this.Request = Request;
	}
}

export class RegisterSchemaResponse {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, Error?: shared.Error) {
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



