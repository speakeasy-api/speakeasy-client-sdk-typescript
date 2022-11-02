import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class GetApisOp extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=and" })
  And: boolean;
  
}

export class GetApisQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=metadata" })
  Metadata?: Map<string, string[]>;
  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=op" })
  Op?: GetApisOp;
  
}

export class GetApisRequest extends SpeakeasyBase {
  @Metadata()
  QueryParams: GetApisQueryParams;
  
}

export class GetApisResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Api })
  Apis?: shared.Api[];
  @Metadata()
  ContentType: string;
  @Metadata()
  Error?: shared.Error;
  @Metadata()
  StatusCode: number;
  
}



