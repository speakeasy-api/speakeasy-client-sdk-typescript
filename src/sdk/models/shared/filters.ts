import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Filter } from "./filter";
import { Expose, Type } from "class-transformer";

// Filters
/**
 * Filters are used to query requests.
 **/
export class Filters extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Filter })
  @Expose({ name: "filters" })
  @Type(() => Filter)
  filters: Filter[];

  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "offset" })
  offset: number;

  @SpeakeasyMetadata()
  @Expose({ name: "operator" })
  operator: string;
}
