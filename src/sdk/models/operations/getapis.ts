import {Metadata} from "../../../internal/utils/utils";

export type GetApisOp = {
    @Metadata("queryParam, name=and")
    And: boolean;
    
}

export type GetApisQueryParams = {
    @Metadata("queryParam, style=deepObject;explode=true;name=metadata")
    Metadata?: Map<string, string[]>;
    @Metadata("queryParam, style=deepObject;explode=true;name=op")
    Op?: GetApisOp;
    
}

export type GetApisRequest = {
    
    QueryParams: GetApisQueryParams;
    
}

export type GetApisResponse = {
    
    Apis?: shared.Api[];
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



