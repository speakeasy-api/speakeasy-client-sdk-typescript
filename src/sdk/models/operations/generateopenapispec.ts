import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenerateOpenApiSpecPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class GenerateOpenApiSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenerateOpenApiSpecPathParams;
}


export class GenerateOpenApiSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  generateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;

  @SpeakeasyMetadata()
  statusCode: number;
}
