import {Metadata} from "../../../internal/utils/utils";

export type InsertVersionMetadataPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type InsertVersionMetadataRequest = {
    
    PathParams: InsertVersionMetadataPathParams;
    @Metadata("request, media_type=application/json")
    Request: shared.VersionMetadata;
    
}

export type InsertVersionMetadataResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    VersionMetadata?: shared.VersionMetadata;
    
}



