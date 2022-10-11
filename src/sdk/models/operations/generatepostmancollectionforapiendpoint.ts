import {Metadata} from "../../../internal/utils/utils";

export type GeneratePostmanCollectionForApiEndpointPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiEndpointID")
    ApiEndpointId: string;
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GeneratePostmanCollectionForApiEndpointRequest = {
    
    PathParams: GeneratePostmanCollectionForApiEndpointPathParams;
    
}

export type GeneratePostmanCollectionForApiEndpointResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    PostmanCollection?: string;
    
    StatusCode: number;
    
}



