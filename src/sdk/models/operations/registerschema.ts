import { Metadata } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class RegisterSchemaPathParams {
  @Metadata("pathParam, style=simple;explode=false;name=apiID")
  ApiId: string;
  @Metadata("pathParam, style=simple;explode=false;name=versionID")
  VersionId: string;
}

export class RegisterSchemaRequestBodyFile {
  @Metadata("multipart_form, content=true")
  Content: string;
  @Metadata("multipart_form, name=file")
  File: string;
}

export class RegisterSchemaRequestBody {
  @Metadata("multipart_form, file=true")
  File: RegisterSchemaRequestBodyFile;
}

export class RegisterSchemaRequest {
  PathParams: RegisterSchemaPathParams;
  @Metadata("request, media_type=multipart/form-data")
  Request: RegisterSchemaRequestBody;
}

export class RegisterSchemaResponse {
  ContentType: string;

  Error?: shared.Error;

  StatusCode: number;
}
