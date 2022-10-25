import { Metadata } from "../../../internal/utils/utils";
import { Filter } from "./filter";

export class Filters {
  @Metadata("json, name=filters")
  Filters: Filter[];
  @Metadata("json, name=limit")
  Limit: number;
  @Metadata("json, name=offset")
  Offset: number;
  @Metadata("json, name=operator")
  Operator: string;
}
