import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GenerateRequestPostmanCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=requestID" })
  requestID: string;
}

export class GenerateRequestPostmanCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenerateRequestPostmanCollectionPathParams;
}

export class GenerateRequestPostmanCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  postmanCollection?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}