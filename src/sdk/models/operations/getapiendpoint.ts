import {Metadata} from "../../../internal/utils/utils";

export type GetApiEndpointPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiEndpointID")
    ApiEndpointId: string;
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GetApiEndpointRequest = {
    
    PathParams: GetApiEndpointPathParams;
    
}

export type GetApiEndpointResponse = {
    
    ApiEndpoint?: shared.ApiEndpoint;
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



