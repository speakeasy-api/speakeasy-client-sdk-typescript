import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



// Filters
/** 
 * Filters are used to query requests.
**/
export class Filters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: Filter })
  filters: Filter[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: string;
}
