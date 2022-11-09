import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GeneratePostmanCollectionForApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GeneratePostmanCollectionForApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GeneratePostmanCollectionForApiEndpointPathParams;
}


export class GeneratePostmanCollectionForApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  postmanCollection?: Uint8Array;

  @Metadata()
  statusCode: number;
}
