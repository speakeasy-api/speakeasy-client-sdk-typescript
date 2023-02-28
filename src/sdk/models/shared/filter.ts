import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// Filter
/** 
 * A filter is a key-value pair that can be used to filter a list of requests.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;

  @SpeakeasyMetadata()
  @Expose({ name: "operator" })
  operator: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}