import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GeneratePostmanCollectionPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class GeneratePostmanCollectionRequest {
  PathParams: GeneratePostmanCollectionPathParams;
}

export class GeneratePostmanCollectionResponse {
  ContentType: string;

  Error?: shared.Error;

  PostmanCollection?: string;

  StatusCode: number;
}
