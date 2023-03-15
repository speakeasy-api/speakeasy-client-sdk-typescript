import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetSchemaDiffPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=apiID",
  })
  apiID: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=baseRevisionID",
  })
  baseRevisionID: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=targetRevisionID",
  })
  targetRevisionID: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=versionID",
  })
  versionID: string;
}

export class GetSchemaDiffRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchemaDiffPathParams;
}

export class GetSchemaDiffResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  schemaDiff?: shared.SchemaDiff;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
