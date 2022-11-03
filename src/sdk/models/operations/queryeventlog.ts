import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class QueryEventLogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=filters" })
  filters?: shared.Filters;
}

export class QueryEventLogRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: QueryEventLogQueryParams;
}

export class QueryEventLogResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BoundedRequest })
  boundedRequests?: shared.BoundedRequest[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
