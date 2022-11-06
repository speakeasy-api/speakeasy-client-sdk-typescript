import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApisOp extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=and" })
  and: boolean;
}


export class GetApisQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=metadata" })
  metadata?: Map<string, string[]>;

  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=op" })
  op?: GetApisOp;
}


export class GetApisRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApisQueryParams;
}


export class GetApisResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Api })
  apis?: shared.Api[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
