import {Metadata} from "../../../internal/utils/utils";

export type SchemeApiKey = {
    @Metadata("security, name=x-api-key")
    ApiKey: string;
    
}

export type Security = {
    @Metadata("security, scheme=true;type=apiKey;subtype=header")
    ApiKey: SchemeApiKey;
    
}



