import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GeneratePostmanCollectionForApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  ApiEndpointId: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
  
}

export class GeneratePostmanCollectionForApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GeneratePostmanCollectionForApiEndpointPathParams;
  
}

export class GeneratePostmanCollectionForApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  PostmanCollection?: string;
  @Metadata()
  StatusCode: number;
  
}



