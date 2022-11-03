import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllForVersionApiEndpointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class GetAllForVersionApiEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GetAllForVersionApiEndpointsPathParams;
}

export class GetAllForVersionApiEndpointsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ApiEndpoint })
  ApiEndpoints?: shared.ApiEndpoint[];

  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  StatusCode: number;
}
