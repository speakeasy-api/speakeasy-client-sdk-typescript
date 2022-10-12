import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class RevokeEmbedAccessTokenPathParams {
    @Metadata("pathParam, style=simple;explode=false;name=tokenID")
    TokenId: string;
    
    constructor(TokenId: string) {
		this.TokenId = TokenId;
	}
}

export class RevokeEmbedAccessTokenRequest {
    
    PathParams: RevokeEmbedAccessTokenPathParams;
    
    constructor(PathParams: RevokeEmbedAccessTokenPathParams) {
		this.PathParams = PathParams;
	}
}

export class RevokeEmbedAccessTokenResponse {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, Error?: Error) {
		this.ContentType = ContentType;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



