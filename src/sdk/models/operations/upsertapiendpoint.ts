import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class UpsertApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  ApiEndpointId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class UpsertApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: UpsertApiEndpointPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  Request: shared.ApiEndpoint;
}

export class UpsertApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  ApiEndpoint?: shared.ApiEndpoint;

  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  StatusCode: number;
}
