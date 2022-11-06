import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenerateOpenApiSpecForApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GenerateOpenApiSpecForApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenerateOpenApiSpecForApiEndpointPathParams;
}


export class GenerateOpenApiSpecForApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  generateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;

  @Metadata()
  statusCode: number;
}
