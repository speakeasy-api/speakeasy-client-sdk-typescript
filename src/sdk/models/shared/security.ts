import {Metadata} from "../../../internal/utils/utils";

export class SchemeApiKey {
    @Metadata("security, name=x-api-key")
    ApiKey: string;
    
    constructor(ApiKey: string) {
		this.ApiKey = ApiKey;
	}
}

export class Security {
    @Metadata("security, scheme=true;type=apiKey;subtype=header")
    ApiKey: SchemeApiKey;
    
    constructor(ApiKey: SchemeApiKey) {
		this.ApiKey = ApiKey;
	}
}



