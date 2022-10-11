import {Metadata} from "../../../internal/utils/utils";

export type GenerateOpenApiSpecForApiEndpointPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiEndpointID")
    ApiEndpointId: string;
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GenerateOpenApiSpecForApiEndpointRequest = {
    
    PathParams: GenerateOpenApiSpecForApiEndpointPathParams;
    
}

export type GenerateOpenApiSpecForApiEndpointResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    GenerateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;
    
    StatusCode: number;
    
}



