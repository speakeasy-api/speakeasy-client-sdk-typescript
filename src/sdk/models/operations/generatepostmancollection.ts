import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GeneratePostmanCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GeneratePostmanCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GeneratePostmanCollectionPathParams;
}


export class GeneratePostmanCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  postmanCollection?: Uint8Array;

  @Metadata()
  statusCode: number;
}
