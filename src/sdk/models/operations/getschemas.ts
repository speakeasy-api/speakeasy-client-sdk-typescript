import {Metadata} from "../../../internal/utils/utils";

export type GetSchemasPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GetSchemasRequest = {
    
    PathParams: GetSchemasPathParams;
    
}

export type GetSchemasResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    Schemata?: shared.Schema[];
    
    StatusCode: number;
    
}



