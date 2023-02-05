import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetApisOp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=and" })
  and: boolean;
}

export class GetApisQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=metadata" })
  metadata?: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=op" })
  op?: GetApisOp;
}

export class GetApisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApisQueryParams;
}

export class GetApisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Api })
  apis?: shared.Api[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}