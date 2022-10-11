import {Metadata} from "../../../internal/utils/utils";

export type GetAllApiEndpointsPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    
}

export type GetAllApiEndpointsRequest = {
    
    PathParams: GetAllApiEndpointsPathParams;
    
}

export type GetAllApiEndpointsResponse = {
    
    ApiEndpoints?: shared.ApiEndpoint[];
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



