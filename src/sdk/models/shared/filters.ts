import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";

export class Filters extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.Filter })
  filters: Filter[];

  @Metadata({ data: "json, name=limit" })
  limit: number;

  @Metadata({ data: "json, name=offset" })
  offset: number;

  @Metadata({ data: "json, name=operator" })
  operator: string;
}
