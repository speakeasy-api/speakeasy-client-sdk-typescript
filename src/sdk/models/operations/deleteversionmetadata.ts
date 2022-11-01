import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class DeleteVersionMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=metaKey" })
  MetaKey: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=metaValue" })
  MetaValue: string;
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
  
}

export class DeleteVersionMetadataRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: DeleteVersionMetadataPathParams;
  
}

export class DeleteVersionMetadataResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  StatusCode: number;
  
}



