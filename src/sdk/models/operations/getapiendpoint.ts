import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GetApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiEndpointPathParams;
}


export class GetApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  apiEndpoint?: shared.ApiEndpoint;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
