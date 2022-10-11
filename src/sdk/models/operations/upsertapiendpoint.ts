import {Metadata} from "../../../internal/utils/utils";

export type UpsertApiEndpointPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiEndpointID")
    ApiEndpointId: string;
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type UpsertApiEndpointRequest = {
    
    PathParams: UpsertApiEndpointPathParams;
    @Metadata("request, media_type=application/json")
    Request: shared.ApiEndpoint;
    
}

export type UpsertApiEndpointResponse = {
    
    ApiEndpoint?: shared.ApiEndpoint;
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



