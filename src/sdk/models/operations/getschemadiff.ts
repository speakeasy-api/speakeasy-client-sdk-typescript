import {Metadata} from "../../../internal/utils/utils";

export type GetSchemaDiffPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=baseRevisionID")
    BaseRevisionId: string;
    @Metadata("pathParam, style=simple;explode=false;name=targetRevisionID")
    TargetRevisionId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GetSchemaDiffRequest = {
    
    PathParams: GetSchemaDiffPathParams;
    
}

export type GetSchemaDiffResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    SchemaDiff?: shared.SchemaDiff;
    
    StatusCode: number;
    
}



