import {Metadata} from "../../../internal/utils/utils";

export type FindApiEndpointPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=displayName")
    DisplayName: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type FindApiEndpointRequest = {
    
    PathParams: FindApiEndpointPathParams;
    
}

export type FindApiEndpointResponse = {
    
    ApiEndpoint?: shared.ApiEndpoint;
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



