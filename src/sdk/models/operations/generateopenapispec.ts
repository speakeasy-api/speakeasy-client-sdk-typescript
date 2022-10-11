import {Metadata} from "../../../internal/utils/utils";

export type GenerateOpenApiSpecPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GenerateOpenApiSpecRequest = {
    
    PathParams: GenerateOpenApiSpecPathParams;
    
}

export type GenerateOpenApiSpecResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    GenerateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;
    
    StatusCode: number;
    
}



