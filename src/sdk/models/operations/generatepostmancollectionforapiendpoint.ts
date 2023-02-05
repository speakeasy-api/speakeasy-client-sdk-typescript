import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GeneratePostmanCollectionForApiEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionID: string;
}

export class GeneratePostmanCollectionForApiEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GeneratePostmanCollectionForApiEndpointPathParams;
}

export class GeneratePostmanCollectionForApiEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  postmanCollection?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}