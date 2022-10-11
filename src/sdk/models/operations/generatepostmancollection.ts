import {Metadata} from "../../../internal/utils/utils";

export type GeneratePostmanCollectionPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type GeneratePostmanCollectionRequest = {
    
    PathParams: GeneratePostmanCollectionPathParams;
    
}

export type GeneratePostmanCollectionResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    PostmanCollection?: string;
    
    StatusCode: number;
    
}



