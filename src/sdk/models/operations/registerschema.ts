import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class RegisterSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  ApiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  VersionId: string;
}

export class RegisterSchemaRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  Content: string;

  @Metadata({ data: "multipart_form, name=file" })
  File: string;
}

export class RegisterSchemaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  File: RegisterSchemaRequestBodyFile;
}

export class RegisterSchemaRequest extends SpeakeasyBase {
  @Metadata()
  PathParams: RegisterSchemaPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  Request: RegisterSchemaRequestBody;
}

export class RegisterSchemaResponse extends SpeakeasyBase {
  @Metadata()
  ContentType: string;

  @Metadata()
  Error?: shared.Error;

  @Metadata()
  StatusCode: number;
}
