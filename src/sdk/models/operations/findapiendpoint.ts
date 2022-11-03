import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class FindApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=displayName" })
  DisplayName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class FindApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: FindApiEndpointPathParams;
}

export class FindApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  ApiEndpoint?: shared.ApiEndpoint;

  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  StatusCode: number;
}
