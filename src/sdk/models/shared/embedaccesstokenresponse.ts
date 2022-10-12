import {Metadata} from "../../../internal/utils/utils";

export class EmbedAccessTokenResponse {
    @Metadata("json, name=access_token")
    AccessToken: string;
    
    constructor(AccessToken: string) {
		this.AccessToken = AccessToken;
	}
}



