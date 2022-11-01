import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
  
}

export class DeleteApiRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: DeleteApiPathParams;
  
}

export class DeleteApiResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  StatusCode: number;
  
}



