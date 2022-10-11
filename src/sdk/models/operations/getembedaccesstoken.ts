import {Metadata} from "../../../internal/utils/utils";

export type GetEmbedAccessTokenQueryParams = {
    @Metadata("queryParam, style=form;explode=true;name=description")
    Description?: string;
    @Metadata("queryParam, style=form;explode=true;name=duration")
    Duration?: number;
    @Metadata("queryParam, serialization=json;name=filters")
    Filters?: shared.Filters;
    
}

export type GetEmbedAccessTokenRequest = {
    
    QueryParams: GetEmbedAccessTokenQueryParams;
    
}

export type GetEmbedAccessTokenResponse = {
    
    ContentType: string;
    
    EmbedAccessTokenResponse?: shared.EmbedAccessTokenResponse;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



