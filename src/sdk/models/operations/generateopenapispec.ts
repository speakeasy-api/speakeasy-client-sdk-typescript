import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GenerateOpenApiSpecPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class GenerateOpenApiSpecRequest {
  PathParams: GenerateOpenApiSpecPathParams;
}

export class GenerateOpenApiSpecResponse {
  ContentType: string;

  Error?: shared.Error;

  GenerateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;

  StatusCode: number;
}
