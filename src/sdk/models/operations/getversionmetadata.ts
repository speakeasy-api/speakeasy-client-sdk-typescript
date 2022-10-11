import {Metadata} from "../../../internal/utils/utils";

export type GetVersionMetadataPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GetVersionMetadataRequest = {
    
    PathParams: GetVersionMetadataPathParams;
    
}

export type GetVersionMetadataResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    VersionMetadata?: shared.VersionMetadata[];
    
}



