import {Metadata} from "../../../internal/utils/utils";

export type GetAllForVersionApiEndpointsPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GetAllForVersionApiEndpointsRequest = {
    
    PathParams: GetAllForVersionApiEndpointsPathParams;
    
}

export type GetAllForVersionApiEndpointsResponse = {
    
    ApiEndpoints?: shared.ApiEndpoint[];
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



