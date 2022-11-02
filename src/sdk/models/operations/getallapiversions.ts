import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetAllApiVersionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;
  
}

export class GetAllApiVersionsOp extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=and" })
  And: boolean;
  
}

export class GetAllApiVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=metadata" })
  Metadata?: Map<string, string[]>;
  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=op" })
  Op?: GetAllApiVersionsOp;
  
}

export class GetAllApiVersionsRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GetAllApiVersionsPathParams;
  @Metadata()
  QueryParams: GetAllApiVersionsQueryParams;
  
}

export class GetAllApiVersionsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Api })
  Apis?: shared.Api[];
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  StatusCode: number;
  
}



