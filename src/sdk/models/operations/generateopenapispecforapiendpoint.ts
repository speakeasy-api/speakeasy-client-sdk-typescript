import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GenerateOpenApiSpecForApiEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionID: string;
}

export class GenerateOpenApiSpecForApiEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenerateOpenApiSpecForApiEndpointPathParams;
}

export class GenerateOpenApiSpecForApiEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  generateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;

  @SpeakeasyMetadata()
  statusCode: number;
}