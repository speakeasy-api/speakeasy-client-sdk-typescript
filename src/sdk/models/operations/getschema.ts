import {Metadata} from "../../../internal/utils/utils";

export type GetSchemaPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GetSchemaRequest = {
    
    PathParams: GetSchemaPathParams;
    
}

export type GetSchemaResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    Schema?: shared.Schema;
    
    StatusCode: number;
    
}



