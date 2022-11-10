import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";



export class RegisterSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionId: string;
}


export class RegisterSchemaRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class RegisterSchemaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: RegisterSchemaRequestBodyFile;
}


export class RegisterSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegisterSchemaPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: RegisterSchemaRequestBody;
}


export class RegisterSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
