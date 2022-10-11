import {Metadata} from "../../../internal/utils/utils";

export type RegisterSchemaPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type RegisterSchemaRequestBodyFile = {
    @Metadata("multipart_form, content=true")
    Content: string;
    @Metadata("multipart_form, name=file")
    File: string;
    
}

export type RegisterSchemaRequestBody = {
    @Metadata("multipart_form, file=true")
    File: RegisterSchemaRequestBodyFile;
    
}

export type RegisterSchemaRequest = {
    
    PathParams: RegisterSchemaPathParams;
    @Metadata("request, media_type=multipart/form-data")
    Request: RegisterSchemaRequestBody;
    
}

export type RegisterSchemaResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



