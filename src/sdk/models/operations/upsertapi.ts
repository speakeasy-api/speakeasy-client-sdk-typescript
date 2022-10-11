import {Metadata} from "../../../internal/utils/utils";

export type UpsertApiPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    
}

export type UpsertApiRequest = {
    
    PathParams: UpsertApiPathParams;
    @Metadata("request, media_type=application/json")
    Request: shared.Api;
    
}

export type UpsertApiResponse = {
    
    Api?: shared.Api;
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



