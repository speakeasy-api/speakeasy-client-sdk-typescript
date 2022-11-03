import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllForVersionApiEndpointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}

export class GetAllForVersionApiEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllForVersionApiEndpointsPathParams;
}

export class GetAllForVersionApiEndpointsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ApiEndpoint })
  apiEndpoints?: shared.ApiEndpoint[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
