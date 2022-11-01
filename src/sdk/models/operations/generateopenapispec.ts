import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GenerateOpenApiSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
  
}

export class GenerateOpenApiSpecRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: GenerateOpenApiSpecPathParams;
  
}

export class GenerateOpenApiSpecResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  GenerateOpenApiSpecDiff?: shared.GenerateOpenApiSpecDiff;
  @Metadata()
  StatusCode: number;
  
}



