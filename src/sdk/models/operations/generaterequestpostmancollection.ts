import {Metadata} from "../../../internal/utils/utils";

export type GenerateRequestPostmanCollectionPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=requestID")
    RequestId: string;
    
}

export type GenerateRequestPostmanCollectionRequest = {
    
    PathParams: GenerateRequestPostmanCollectionPathParams;
    
}

export type GenerateRequestPostmanCollectionResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    PostmanCollection?: string;
    
    StatusCode: number;
    
}



