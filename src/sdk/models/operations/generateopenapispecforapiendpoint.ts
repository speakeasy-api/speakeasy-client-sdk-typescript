import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenerateOpenApiSpecForApiEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GenerateOpenApiSpecForApiEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenerateOpenApiSpecForApiEndpointPathParams;
}


export class GenerateOpenApiSpecForApiEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  generateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;

  @SpeakeasyMetadata()
  statusCode: number;
}
