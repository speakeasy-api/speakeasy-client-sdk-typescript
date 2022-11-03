import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class UpsertApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}

export class UpsertApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpsertApiEndpointPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ApiEndpoint;
}

export class UpsertApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  apiEndpoint?: shared.ApiEndpoint;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
