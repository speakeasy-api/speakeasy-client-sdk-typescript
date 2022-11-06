import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteApiEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiEndpointID" })
  apiEndpointId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class DeleteApiEndpointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiEndpointPathParams;
}


export class DeleteApiEndpointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
