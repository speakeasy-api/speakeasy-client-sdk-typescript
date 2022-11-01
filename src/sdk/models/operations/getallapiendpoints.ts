import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllApiEndpointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;
  
}

export class GetAllApiEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GetAllApiEndpointsPathParams;
  
}

export class GetAllApiEndpointsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ApiEndpoint })
  ApiEndpoints?: shared.ApiEndpoint[];
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  StatusCode: number;
  
}



