import {Metadata} from "../../../internal/utils/utils";

export type GetAllApiVersionsPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    
}

export type GetAllApiVersionsOp = {
    @Metadata("queryParam, name=and")
    And: boolean;
    
}

export type GetAllApiVersionsQueryParams = {
    @Metadata("queryParam, style=deepObject;explode=true;name=metadata")
    Metadata?: Map<string, string[]>;
    @Metadata("queryParam, style=deepObject;explode=true;name=op")
    Op?: GetAllApiVersionsOp;
    
}

export type GetAllApiVersionsRequest = {
    
    PathParams: GetAllApiVersionsPathParams;
    
    QueryParams: GetAllApiVersionsQueryParams;
    
}

export type GetAllApiVersionsResponse = {
    
    Apis?: shared.Api[];
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



