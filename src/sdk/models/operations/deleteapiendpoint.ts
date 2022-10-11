import {Metadata} from "../../../internal/utils/utils";

export type DeleteApiEndpointPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiEndpointID")
    ApiEndpointId: string;
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type DeleteApiEndpointRequest = {
    
    PathParams: DeleteApiEndpointPathParams;
    
}

export type DeleteApiEndpointResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



