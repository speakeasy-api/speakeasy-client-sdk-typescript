import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class QueryEventLogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=filters" })
  Filters?: shared.Filters;
  
}

export class QueryEventLogRequest extends SpeakeasyBase {
  @Metadata()
  QueryParams: QueryEventLogQueryParams;
  
}

export class QueryEventLogResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BoundedRequest })
  BoundedRequests?: shared.BoundedRequest[];
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  StatusCode: number;
  
}



