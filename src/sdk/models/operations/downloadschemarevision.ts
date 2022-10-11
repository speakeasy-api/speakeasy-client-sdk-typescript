import {Metadata} from "../../../internal/utils/utils";

export type DownloadSchemaRevisionPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=revisionID")
    RevisionId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type DownloadSchemaRevisionRequest = {
    
    PathParams: DownloadSchemaRevisionPathParams;
    
}

export type DownloadSchemaRevisionResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    Schema?: string;
    
    StatusCode: number;
    
}



