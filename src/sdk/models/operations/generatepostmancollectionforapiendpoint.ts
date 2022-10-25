import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GeneratePostmanCollectionForApiEndpointPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiEndpointID")
  ApiEndpointId: string;
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class GeneratePostmanCollectionForApiEndpointRequest {
  PathParams: GeneratePostmanCollectionForApiEndpointPathParams;
}

export class GeneratePostmanCollectionForApiEndpointResponse {
  ContentType: string;

  Error?: shared.Error;

  PostmanCollection?: string;

  StatusCode: number;
}
