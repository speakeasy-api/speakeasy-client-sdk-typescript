import {Metadata} from "../../../internal/utils/utils";

export type DeleteVersionMetadataPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=metaKey")
    MetaKey: string;
    @Metadata("pathParam, style=simple;explode=false;name=metaValue")
    MetaValue: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type DeleteVersionMetadataRequest = {
    
    PathParams: DeleteVersionMetadataPathParams;
    
}

export type DeleteVersionMetadataResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



