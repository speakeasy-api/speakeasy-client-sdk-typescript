import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorT
/** 
 * The `Status` type defines a logical error model
**/
export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
