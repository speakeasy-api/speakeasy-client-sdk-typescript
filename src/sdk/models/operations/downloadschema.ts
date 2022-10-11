import {Metadata} from "../../../internal/utils/utils";

export type DownloadSchemaPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type DownloadSchemaRequest = {
    
    PathParams: DownloadSchemaPathParams;
    
}

export type DownloadSchemaResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    Schema?: string;
    
    StatusCode: number;
    
}



