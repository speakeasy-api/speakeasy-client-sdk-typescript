import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";



// Filter
/** 
 * A filter is a key-value pair that can be used to filter a list of requests.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=operator" })
  operator: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
