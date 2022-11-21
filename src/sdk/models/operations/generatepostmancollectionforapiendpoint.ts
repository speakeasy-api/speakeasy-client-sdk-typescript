import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GeneratePostmanCollectionForApiEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GeneratePostmanCollectionForApiEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GeneratePostmanCollectionForApiEndpointPathParams;
}


export class GeneratePostmanCollectionForApiEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  postmanCollection?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
