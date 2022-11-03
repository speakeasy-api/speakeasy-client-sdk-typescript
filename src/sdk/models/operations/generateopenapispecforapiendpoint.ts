import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GenerateOpenApiSpecForApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  ApiEndpointId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class GenerateOpenApiSpecForApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GenerateOpenApiSpecForApiEndpointPathParams;
}

export class GenerateOpenApiSpecForApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  GenerateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;

  @Metadata()
  StatusCode: number;
}
