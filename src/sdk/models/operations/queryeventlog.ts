import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class QueryEventLogQueryParams {
  @Metadata("queryParam, serialization=json;name=filters")
  Filters?: shared.Filters;
}

export class QueryEventLogRequest {
  QueryParams: QueryEventLogQueryParams;
}

export class QueryEventLogResponse {
  BoundedRequests?: shared.BoundedRequest[];

  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
