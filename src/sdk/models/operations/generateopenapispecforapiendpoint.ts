import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GenerateOpenApiSpecForApiEndpointPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiEndpointID")
  ApiEndpointId: string;
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class GenerateOpenApiSpecForApiEndpointRequest {
  PathParams: GenerateOpenApiSpecForApiEndpointPathParams;
}

export class GenerateOpenApiSpecForApiEndpointResponse {
  ContentType: string;

  Error?: shared.Error;

  GenerateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;

  StatusCode: number;
}
