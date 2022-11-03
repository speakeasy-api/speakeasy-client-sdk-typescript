import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GenerateOpenApiSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}

export class GenerateOpenApiSpecRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenerateOpenApiSpecPathParams;
}

export class GenerateOpenApiSpecResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  generateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;

  @Metadata()
  statusCode: number;
}
