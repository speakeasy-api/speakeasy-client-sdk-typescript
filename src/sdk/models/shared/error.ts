import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Error
/** 
 * The `Status` type defines a logical error model
**/
export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
