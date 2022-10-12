import * as shared from "../shared";

export class GetValidEmbedAccessTokensResponse {
    
    ContentType: string;
    
    EmbedTokens?: shared.EmbedToken[];
    
    Error?: shared.Error;
    
    StatusCode: number;
    
    constructor(ContentType: string, StatusCode: number, EmbedTokens?: shared.EmbedToken[], Error?: Error) {
		this.ContentType = ContentType;
		this.EmbedTokens = EmbedTokens;
		this.Error = Error;
		this.StatusCode = StatusCode;
	}
}



