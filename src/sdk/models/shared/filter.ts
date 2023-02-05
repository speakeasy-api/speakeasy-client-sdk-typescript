import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// Filter
/** 
 * A filter is a key-value pair that can be used to filter a list of requests.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}