import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class FindApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=displayName" })
  displayName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}

export class FindApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FindApiEndpointPathParams;
}

export class FindApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  apiEndpoint?: shared.ApiEndpoint;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
