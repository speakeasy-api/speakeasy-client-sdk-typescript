import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GenerateRequestPostmanCollectionPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=requestID")
  RequestId: string;
}

export class GenerateRequestPostmanCollectionRequest {
  PathParams: GenerateRequestPostmanCollectionPathParams;
}

export class GenerateRequestPostmanCollectionResponse {
  ContentType: string;

  Error?: shared.Error;

  PostmanCollection?: string;

  StatusCode: number;
}
