import {Metadata} from "../../../internal/utils/utils";

export type RevokeEmbedAccessTokenPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=tokenID")
    TokenId: string;
    
}

export type RevokeEmbedAccessTokenRequest = {
    
    PathParams: RevokeEmbedAccessTokenPathParams;
    
}

export type RevokeEmbedAccessTokenResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



