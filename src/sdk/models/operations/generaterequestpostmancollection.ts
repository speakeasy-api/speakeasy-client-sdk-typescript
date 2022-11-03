import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GenerateRequestPostmanCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=requestID" })
  RequestId: string;
}

export class GenerateRequestPostmanCollectionRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GenerateRequestPostmanCollectionPathParams;
}

export class GenerateRequestPostmanCollectionResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  PostmanCollection?: string;

  @Metadata()
  StatusCode: number;
}
