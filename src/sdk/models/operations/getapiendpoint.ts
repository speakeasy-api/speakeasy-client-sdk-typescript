import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  ApiEndpointId: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
  
}

export class GetApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GetApiEndpointPathParams;
  
}

export class GetApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  ApiEndpoint?: shared.ApiEndpoint;
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  StatusCode: number;
  
}



