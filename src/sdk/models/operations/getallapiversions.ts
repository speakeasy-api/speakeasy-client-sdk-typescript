import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";



export class GetAllApiVersionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;
}


export class GetAllApiVersionsOp extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=and" })
  and: boolean;
}


export class GetAllApiVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=metadata" })
  metadata?: Map<string, string[]>;

  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=op" })
  op?: GetAllApiVersionsOp;
}


export class GetAllApiVersionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllApiVersionsPathParams;

  @Metadata()
  queryParams: GetAllApiVersionsQueryParams;
}


export class GetAllApiVersionsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Api })
  apis?: shared.Api[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
