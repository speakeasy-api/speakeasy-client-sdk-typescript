import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";

export class Filters extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.Filter })
  Filters: Filter[];
  @Metadata({ data: "json, name=limit" })
  Limit: number;
  @Metadata({ data: "json, name=offset" })
  Offset: number;
  @Metadata({ data: "json, name=operator" })
  Operator: string;
  
}



