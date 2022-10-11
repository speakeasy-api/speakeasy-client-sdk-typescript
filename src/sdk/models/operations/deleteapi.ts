import {Metadata} from "../../../internal/utils/utils";

export type DeleteApiPathParams = {
    @Metadata("pathParam, style=simple;explode=false;name=apiID")
    ApiId: string;
    @Metadata("pathParam, style=simple;explode=false;name=versionID")
    VersionId: string;
    
}

export type DeleteApiRequest = {
    
    PathParams: DeleteApiPathParams;
    
}

export type DeleteApiResponse = {
    
    ContentType: string;
    
    Error?: shared.Error;
    
    StatusCode: number;
    
}



