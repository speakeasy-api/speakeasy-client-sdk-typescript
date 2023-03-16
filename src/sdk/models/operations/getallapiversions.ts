import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetAllApiVersionsOp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=and" })
  and: boolean;
}

export class GetAllApiVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=apiID",
  })
  apiID: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=deepObject;explode=true;name=metadata",
  })
  metadata?: Record<string, string[]>;

  @SpeakeasyMetadata({
    data: "queryParam, style=deepObject;explode=true;name=op",
  })
  op?: GetAllApiVersionsOp;
}

export class GetAllApiVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Api })
  apis?: shared.Api[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
