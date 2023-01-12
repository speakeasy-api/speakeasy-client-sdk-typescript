import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QueryEventLogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=filters" })
  filters?: shared.Filters;
}


export class QueryEventLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: QueryEventLogQueryParams;
}


export class QueryEventLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BoundedRequest })
  boundedRequests?: shared.BoundedRequest[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
