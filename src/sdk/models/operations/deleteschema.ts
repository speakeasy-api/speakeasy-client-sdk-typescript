import {Metadata} from "../../../internal/utils/utils";

export type DeleteSchemaPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=revisionID")
    RevisionId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type DeleteSchemaRequest = {
    
    PathParams: DeleteSchemaPathParams;
    
}

export type DeleteSchemaResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



