import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GeneratePostmanCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=apiID",
  })
  apiID: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=versionID",
  })
  versionID: string;
}

export class GeneratePostmanCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GeneratePostmanCollectionPathParams;
}

export class GeneratePostmanCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  postmanCollection?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
