import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestMetadata
/** 
 * Key-Value pairs associated with a request
**/
export class RequestMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
