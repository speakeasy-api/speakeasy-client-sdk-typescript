import {Metadata} from "../../../internal/utils/utils";

export type GetSchemaRevisionPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=revisionID")
    RevisionId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GetSchemaRevisionRequest = {
    
    PathParams: GetSchemaRevisionPathParams;
    
}

export type GetSchemaRevisionResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    Schema?: shared.Schema;
    
    StatusCode: number;
    
}



