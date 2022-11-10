import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";



export class GenerateRequestPostmanCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=requestID" })
  requestId: string;
}


export class GenerateRequestPostmanCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenerateRequestPostmanCollectionPathParams;
}


export class GenerateRequestPostmanCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  postmanCollection?: Uint8Array;

  @Metadata()
  statusCode: number;
}
